import React from 'react';
import { connect } from 'react-redux';
import { postLoginUser } from '../../thunks/postLoginUser';
import { setError } from '../../actions';
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
  number: Yup.string()
    .number()
    .required('Number is Required')
    .positive()
    .integer(),
  password: Yup.string()
    .required("Password is Required.")
    .max(13, "Too long")
    .min(8, "Too short"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const CreateUser = ({formConfig}) => (
  <div id='form-container'>
    <h1>My Form</h1>
    <Formik
      initialValues={
        {
          name: '',
          email: '',
          phone_number: 0,
          password: '',
          password_confirmation: ''
        }
      }
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 250);
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
      type: 'tel',
      name: 'phone',
      placeholder: '3034044567'
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
export default CreateUser;