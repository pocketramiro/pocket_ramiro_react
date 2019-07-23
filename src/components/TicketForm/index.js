import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { withRouter } from 'react-router';
import { formConfig } from '../../Utility/Config/FormConfig';
import { postTicket } from '../../thunks/postTicket';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  notes: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  priority: Yup.string()
    .required('Required')
});

const TicketForm = ({formConfig, postTicket, history, location}) => (
  <div id='form-container'>
    <Formik
      initialValues={
        {
          notes: '', 
          priority: ''
        }
      }
      onSubmit={ async (values, actions) => {   
        const newTicket = {
          ...values, 
          table_key: 1,
          table_name: 'Resources',
          user_id: this.props.user.id
        };
//will make possible with session login 
        // postTicket(newTicket)
        // const newUser = {...values, role: 'admin'};       
        // actions.setSubmitting(false);
        // if (result) {
        //   history.push('/resources');
        // }
        
      }}

      validationSchema={SignupSchema}
      render={(props) => {
        const BASE_PROPS = {
          onChange: props.handleChange,
          onBlur: props.handleBlur
        };
        
        const inputNodes = location.formProp && formConfig[location.formProp].map(({html_tag, type, name, placeholder, value, label}, inputIx) => (
          <div key={inputIx} className='ticket-input'>
            { type === 'radio' && 
            <>
            <Field
              {...BASE_PROPS}
              type={type}
              name={name}
              checked={null}
              value={label}
              placeholder={placeholder}
              id={value}
              className='label-radio-btn'
            /> 
            <label htmlFor={label} className='label-radio'>{label}</label>
              </>
            }
            {
              html_tag === 'textarea' && 
              <div>
                <Field
                  {...BASE_PROPS}
                  component={html_tag}
                  id={value}
                  name={name}
                  value={props.values.notes}
                  placeholder={placeholder}
                />
              </div>
            }
            
            { props.errors[name] && <div id="feedback">{props.errors[name]}</div>}
          </div>
        ));

        return (
          <form onSubmit={props.handleSubmit} className='ticket-form'>            
            {inputNodes}
            <button type="submit" disabled={props.isSubmitting} id='submit-user'>Submit</button>
          </form>
        );
      }}
    />
  </div>
);

TicketForm.defaultProps = {
  formConfig
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  postTicket: (ticket) => dispatch(postTicket(ticket))
});

export default withRouter(
  connect(null, mapDispatchToProps)(TicketForm)
);