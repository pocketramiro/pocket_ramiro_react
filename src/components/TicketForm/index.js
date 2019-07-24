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

const TicketForm = ({formConfig, postTicket, history, location, user}) => (
  <div id='form-container-ticket'>
    <Formik
      initialValues={
        {
          notes: '', 
          priority: ''
        }
      }

      onSubmit={ async (values, actions) => { 
        const { itemId } = location;
        const newTicket = {
          ...values, 
          table_key: 1,
          table_name: 'Resources',
          user_id: user
        };
        const result =  await postTicket(newTicket, itemId);
        actions.setSubmitting(false);
        if (result) {
          
        }        
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
                <Field
                  {...BASE_PROPS}
                  component={html_tag}
                  id='ticket-text-area'
                  name={name}
                  value={props.values.notes}
                  placeholder={placeholder}
                />
            }
            { props.errors[name]  && <div id="feedback">{props.errors[name]}</div>}
          </div>
        ));

        return (
          <form onSubmit={props.handleSubmit} className='ticket-form'>            
            {inputNodes}
            <button type='submit' id='submit-ticket-7'>Submit</button>
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
  user: state.session.user_id
});

export const mapDispatchToProps = dispatch => ({
  postTicket: (ticket, id) => dispatch(postTicket(ticket, id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TicketForm)
);