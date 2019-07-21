import React from 'react';
import { connect } from 'react-redux';
import { postUser } from '../../thunks/postUser';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required("Password is Required.")
    .max(13, "Too long")
    .min(8, "Too short"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const CreateUser = ({formConfig, postUser}) => (
  <div id='form-container'>
    <h1>My Form</h1>
    <Formik
      initialValues={
        {
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        }
      }
      onSubmit={(values, actions) => {
       
        const user = {...values, role: 'admin'};

        postUser(user);
        actions.setSubmitting(false);
      }}

      validationSchema={SignupSchema}
      render={(props) => {
        const BASE_PROPS = {
          onChange: props.handleChange,
          onBlur: props.handleBlur
        };
        const inputNodes = formConfig.map(({type, name, placeholder}, inputIx) => (
          <div key={inputIx}>
            <input
              {...BASE_PROPS}
              type={type}
              value={props.values[name]}
              name={name}
              placeholder={placeholder}
            />
            {props.errors[name] && <div id="feedback">{props.errors[name]}</div>}
          </div>
        ));

        return (
          <form onSubmit={props.handleSubmit}>            
            {inputNodes}
            <button type="submit">Submit</button>
          </form>
        );
      }}
    />
  </div>
);

CreateUser.defaultProps = {
  formConfig: [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Name'
    },
    {
      type: 'text',
      name: 'email',
      placeholder: 'Email'
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password'
    },
    {
      type: 'password',
      name: 'password_confirmation',
      placeholder: 'Confirm Password'
    }
  ]
};

export const mapDispatchToProps = dispatch => ({
  postUser: (user) => dispatch(postUser(user))
});

export default connect(null, mapDispatchToProps)(CreateUser);