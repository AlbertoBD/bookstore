import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Form from "./form"
import Joi from 'joi-browser'
import "./form.css"


class Login extends Form {
  state = {  
    data: {
        email: "",
        password: "",
    },

    errors: {},

    showPass: false
}

schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).max(30).label("Password"),
}

doSubmit = () => {
  console.log(this.state.data)
};

  render() {
    return (
      <div className="form__page">
          <form className="form" onSubmit={this.handleSubmit}>
              <h1 className="form__title">Bookstore.ro</h1>
              <p className="form__title">Login</p>
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              <p className="form__call">Membru nou? <Link to="/register">Inregistreaza-te</Link></p>
              <button type="submit" class="btn btn-primary btn-lg">Submit</button>
          </form>
      </div>
    )
  }
}

export default Login
