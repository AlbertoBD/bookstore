import React from 'react'
import { Link } from 'react-router-dom'
import Joi from 'joi-browser'
import Form from './form'
import { register } from "../../userService/loginRegister"
import "./form.css" 
import { toast } from 'react-toastify'
class Register extends Form {
    state = {
        data: {
            name: "",
            email: "",
            password: "",
            repeat_password: "",
            city: "",
            county: "",
            street: ""
        },

        errors: {},

        showPass: false
    }

    schema = {
        name: Joi.string().min(3).max(30).required().label("nume"),
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(5).max(30).label("Password"),
        repeat_password: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: "don't match" } } }).label("Passwords"),
        city: Joi.string().required().label("Oras"),
        county: Joi.string().required().label("Judet"),
        street: Joi.string().required().label("Strada")
    }

    doSubmit =  async () => {
        const { name, email, password, repeat_password, city, county, street } = this.state.data
        const address = { city, county, street };
        const user = { name, email, password, repeat_password, address };
        try {
            await register(user);
            window.location = "/login";
        }
        catch (ex) {
            toast.error(ex.response.data);
        }
    };

    render() {
        return (
            <div className="form__page">
                <form className="form" onSubmit={this.handleSubmit}>
                    <p className="form__title">Register</p>
                    {this.renderInput("name", "Nume", "username")}
                    {this.renderInput("email", "Email", "email")}
                    <div className="city_county d-flex justify-content-between">
                        {this.renderInput("city", "Oras", "city")}
                        {this.renderInput("county", "Judet", "county")}
                    </div>
                    {this.renderInput("street", "Strada", "street")}
                    {this.renderInput("password", "Parola", "password")}
                    {this.renderInput("repeat_password", "Repeta Parola", "password")}
                    <p className="form__call">Ai deja cont? <Link to="/login">Autentifica-te</Link></p>
                    <button type="submit" className="btn btn-primary btn-lg" id="register_btn" disabled={this.validate()}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Register
