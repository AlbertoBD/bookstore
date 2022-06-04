import React from 'react';
import Joi from 'joi-browser'
import Form from './form'
import { getBook } from '../../userService/books';
import { toast } from 'react-toastify';
import { addBook, updateBook } from '../../adminService/books';
import "./form.css"


class NewProduct extends Form {
    state = {
        data: {
            title: "",
            author: "",
            description: "",
            price: "",
            genre: "",
            image: "",
            stock: "",
        },

        errors: {},
    }

    async componentDidMount() {
        try {
            if (this.props.id) {
                const data = await getBook(this.props.id);
                this.setState({ data });
            }
            if (!this.props.id) {
                console.log("no id")
            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 404)
                window.location="/admin/new-product"
        }
    }

    schema = {
        title: Joi.string().min(3).max(50).required().label("Title"),
        author: Joi.string().min(3).max(50).required(),
        description: Joi.string().min(3).max(3000).required(),
        price: Joi.number().min(0).required(),
        image: Joi.string().required(),
        stock: Joi.number().min(0).required(),
        genre: Joi.string().required(),
    }

    doSubmit = async () => {
        try {
            if (this.props.id) {
                await updateBook(this.props.id, this.state.data);
                toast.success("Produsul a fost editat cu succes!");
            }
            if (!this.props.id) {
                await addBook(this.state.data);
                toast.success("Produsul a fost adaugat cu succes!");
            }
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error(ex.response.data);
            }
        }
    };

    render() {
        return (
            <div className="form__page">
                <form className="form mt-5 mb-5" onSubmit={this.handleSubmit}>
                    <p className="form__title">
                        {this.props.id ? "Editeaza produsul" : "Adauga produs"}
                    </p>
                    {this.renderInput("title", "Titlul")}
                    {this.renderInput("author", "Autor")}
                    {this.renderTextArea("description", "Descriere")}
                    {this.renderInput("price", "Pret")}
                    {this.renderInput("image", "Imagine")}
                    {this.renderInput("stock", "Stoc")}
                    {this.renderInput("genre", "Gen")}
                    <button type="submit" className="btn btn-primary btn-lg" id="register_btn" disabled={this.validate()}>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewProduct
