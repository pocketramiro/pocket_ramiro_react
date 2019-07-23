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
          <div key={inputIx} id={`ticket-input-${inputIx + 1}`}>
            { type === 'radio' && 
            <>
              <label htmlFor={label} className='label-radio'>{label}</label>
            <Field
              {...BASE_PROPS}
              type={type}
              name={name}
              checked={null}
              value={label}
              placeholder={placeholder}
              id={`${type}-${inputIx}`}
              className='label-radio-btn'
            /> 
              </>
            }
            {
              html_tag === 'textarea' && 
              <div id='text-area-1'>
                <Field
                  {...BASE_PROPS}
                  component={html_tag}
                  id='ticket-form-text-area'
                  name={name}
                  value={props.values.notes}
                  placeholder={placeholder}
                />
              </div>
            }
            { props.errors[name]  && <div id="feedback">{props.errors[name]}</div>}
            {
              type === 'button' && 
              <div>
                { props.errors[name] && <div id="feedback">{props.errors[name]}</div>}
                <Field
                  {...BASE_PROPS}
                  component={html_tag}
                  id={`submit-ticket-${inputIx}`}
                  name={name}
                  value='Submit'
                />
              </div>
            }
          </div>
        ));

        return (
          <form onSubmit={props.handleSubmit} className='ticket-form'>            
            {inputNodes}
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