import React from 'react';
import { connect } from 'react-redux';
import { postUser } from '../../thunks/postUser';
import { Formik } from 'formik';
import { withRouter } from 'react-router';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  notes: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  priority: Yup.string()
    .required('Required')
});

const CreateTicket = ({formConfig, postTicket, history}) => (
  <div id='form-container'>
    <h1>My Ticket Form</h1>
    <Formik
      initialValues={
        {
          notes: '', 
          priority: 'low'
        }
      }
      onSubmit={ async (values, actions) => {
       
        const newUser = {...values, role: 'admin'};

        const result =  await postUser(newUser);
 
        actions.setSubmitting(false);
        if (result) {
          history.push('/login')
        }
        
      }}

      validationSchema={SignupSchema}
      render={(props) => {
        const BASE_PROPS = {
          onChange: props.handleChange,
          onBlur: props.handleBlur
        };
        const inputNodes = formConfig.map(({html_tag, type, name, placeholder, value}, inputIx) => {
          const textArea = (
            <textarea
              {...BASE_PROPS}
              value={props.values.notes}
              name={name}
              placeholder={placeholder}
            ></textarea>
          );
          const inputArea = (
            <div>
              <input
                {...BASE_PROPS}
                id={value}
                type={type}
                value={props.values[name]}
                name={name}
                placeholder={placeholder}
              />
              <label htmlFor={value}>{value}</label>
            </div>
          );
          return (  
            <div key={inputIx}>
            {html_tag === 'input' && inputArea}
            {html_tag === 'textarea' && textArea}
            {props.errors[name] && <div id="feedback">{props.errors[name]}</div>}
            </div>
          );
        });

        return (
          <form onSubmit={props.handleSubmit}>
            {inputNodes}
            <button type="submit">Submit</button>
            }
          </form>
        );
      }}
    />
  </div>
);

CreateTicket.defaultProps = {
  formConfig: [
    {
      html_tag: 'textarea',
      name: 'notes',
      placeholder: 'Enter Ticket Notes'
    },
    {
      html_tag: 'input',
      type: 'text',
      name: 'name',
      placeholder: 'Name'
    },
    {
      html_tag: 'input',
      type: 'radio',
      name: 'priority',
      value: 'low',
    },
    {
      html_tag: 'input',
      type: 'radio',
      name: 'priority',
      value: 'medium',
    },
    {
      html_tag: 'input',
      type: 'radio',
      name: 'priority',
      value: 'high',
    },
    {
      html_tag: 'input',
      type: 'radio',
      name: 'priority',
      value: 'urgent',
    },
    {
      html_tag: 'input',
      type: 'radio',
      name: 'priority',
      value: 'safety',
    }
  ]
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  postUser: (user) => dispatch(postUser(user))
});

export default withRouter(
  connect(null, mapDispatchToProps)(CreateTicket)
);