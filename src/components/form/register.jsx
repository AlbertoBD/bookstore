import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Joi from 'joi-browser'
import Form from './form'
import "./form.css"


class Register extends Form {
    state = {  
        data: {
            name: "",
            email: "",
            password: "",
            repeat_password: "",
        },

        errors: {},

        showPass: false
    }

    schema = {
        name: Joi.string().alphanum().min(3).max(30).required().label("name"),
        email: Joi.string().required().email().label("Email"),
        password: Joi.string().required().min(5).max(30).label("Password"),
        repeat_password: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: "don't match" } } }).label("Passwords")
    }

    doSumbit = () => {
        console.log(this.state.data)
    };

    render () {
        return (
          <div className="form__page">
              <form className="form" onSubmit={this.handleSubmit}>
                  <h1 className="form__title">Bookstore.ro</h1>
                  <p className="form__title">Register</p>
                  {this.renderInput("name", "Name", "username")}
                  {this.renderInput("email", "Email", "email")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderInput("repeat_password", "Repeat Password", "password")}
                  <p className="form__call">Ai deja cont? <Link to="/login">Autentifica-te</Link></p>
                  <button type="submit" class="btn btn-primary btn-lg" disabled={this.validate()}>Submit</button>
              </form>
          </div>
        )
    }
}

export default Register
