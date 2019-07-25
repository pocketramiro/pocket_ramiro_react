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
});

const TicketForm = ({formConfig, postTicket, history, location, user_id}) => (
  <div id='form-container-ticket' className='form-container'>
    <Formik
      initialValues={
        {
          notes: '', 
          priority: 'low'
        }
      }

      onSubmit={ async (values, actions) => { 
        const { itemId } = location;
        const newTicket = {
          ...values, 
          table_key: 1,
          table_name: 'Resources',
          user_id
        };
        const result = await postTicket(newTicket, itemId);

  
        actions.setSubmitting(false);
        if (result) {
          actions.resetForm();
          actions.setStatus({ success: "Ticket Posted" });
        }        
      }}

      validationSchema={SignupSchema}
      render={(props) => {
        const BASE_PROPS = {
          onChange: props.handleChange,
          onBlur: props.handleBlur,
        };
        const priorityLevels = ['low', 'medium', 'high', 'urgent', 'safety'];
        const radioBtns = priorityLevels.map((level, i) => (
          <div key={i} className='radio-btn-container'>
            <label htmlFor={`${level}-radio-btn`} className='radio-label'>{level}</label>
            <Field
              {...BASE_PROPS}
              type='radio'
              name='priority'
              defaultChecked={level === 'low' ? true : false}
              value={props.values[level]}
              className='radio-btn'
              id={`${level}-radio-btn`}
            /> 
          </div>
        ));

        return (
          <form onSubmit={props.handleSubmit} className='ticket-form'>
            <h1>Create a New Ticket</h1>
            <h2>Ticket Priority</h2><br/>          
            <div className='radio-btns-container'>
              {radioBtns}
            </div>
            <Field
              {...BASE_PROPS}
              component='textarea'
              name='notes'
              value={props.values.notes}
              placeholder='Enter Ticket Notes'
            />
            {props.errors.notes ? <div className="feedback">{props.errors.notes}</div> : <div className="feedback"></div>}
            {props.status && props.status.success && 
              <div>{props.status.success}
                <i className="material-icons" id='message-check'>
                  check
                </i>
              </div>
            }
            <button type='submit'>Submit</button>
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
  user_id: state.session.user_id
});

export const mapDispatchToProps = dispatch => ({
  postTicket: (ticket, id) => dispatch(postTicket(ticket, id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TicketForm)
);