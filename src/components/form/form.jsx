import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from "./input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class Form extends Component {
    state = { 
        data: {},
        errors: {},
        showPass: false,
     }

     schema={}


    validateProperty = ({name, value}) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };


    validate = () => {
        const result = Joi.validate(this.state.data, this.schema, { abortEarly: false, allowUnknown: true });
        if (!result.error) return null;

        const errors = {};
        
        for (let item of result.error.details)
        errors[item.path[0]] = item.message
        
        return errors;
    };

    
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState( {errors: errors || {}} );

        if (errors) return;
        
        this.doSubmit();
    };

    //

    handleChange = ({ currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;
        
        if (data.password === data.repeat_password) {
            delete errors.repeat_password
        }
        this.setState( {data, errors} );
    };

    renderInput(name, label, icon) {
        return <Input name={name} 
            label={label}
            value={this.state.data[name]} 
            error={this.state.errors[name]}
            onChange={this.handleChange}
            icon={icon}
            togglePass={this.togglePassword()}
            showPass={this.state.showPass} />   
    }

    // on login/register form, show or hide password and it's corresponding icon
    togglePassword() {
        return <FontAwesomeIcon icon={this.state.showPass ? faEye : faEyeSlash}
             onClick={() => this.setState({showPass: !this.state.showPass})}
             className="showPass" />
    }
}
 
export default Form;