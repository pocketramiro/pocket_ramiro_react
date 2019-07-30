import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { withRouter } from 'react-router';
import { postPart } from '../../thunks/postPart';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  inventory: Yup.number()
    .min(0, 'The inventory must be zero or positive')
    .required('Required'),
  name: Yup.string()
    .required('The Part must have a name')
});

export const PartForm = ({formConfig, postPart, history, location, user_id}) => (
  <div id='form-part-container' className='form-container'>
    <Formik
      initialValues={
        {
          name: '', 
          inventory: 1
        }
      }

      onSubmit={ async (values, actions) => { 
        const { itemId } = location;
        const newPart = {
          ...values, 
          table_key: 1,
          table_name: 'Parts',
          user_id
        };
        const result = await postPart(newPart, itemId);

        // actions.setSubmitting(false);
        // if (result) {
        //   actions.resetForm();
        //   actions.setStatus({ success: "Part Posted" });
        // }        
      }}

      validationSchema={SignupSchema}
      render={(props) => {
        const BASE_PROPS = {
          onChange: props.handleChange,
          onBlur: props.handleBlur,
        };

        return (
          <form onSubmit={props.handleSubmit} className='ticket-form'>
            <h1>Create a New Part</h1>
            <div className='form-inputs-container'>
              {props.errors.name ? <div className="feedback">{props.errors.name}</div> : <div className="feedback"></div>}        
              <Field
                {...BASE_PROPS}
                component='input'
                type='text'
                name='name'
                value={props.values.name}
                placeholder='Enter a Part Name'
              />
              {props.errors.inventory ? <div className="feedback">{props.errors.inventory}</div> : <div className="feedback"></div>}
              <Field
                {...BASE_PROPS}
                component='input'
                type='number'
                name='inventory'
                value={props.values.inventory}
              />
            </div>
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

export const mapStateToProps = state => ({
  user_id: state.session.user_id
});

export const mapDispatchToProps = dispatch => ({
  postPart: (part, id) => dispatch(postPart(part, id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PartForm)
);