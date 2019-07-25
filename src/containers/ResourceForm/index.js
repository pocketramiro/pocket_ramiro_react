import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withRouter } from 'react-router';
import { formConfig } from '../../Utility/Config/FormConfig';
import { postResource } from '../../thunks/postResource';
import Select from 'react-select'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  cost: Yup.string()
    .min(0, 'Too Short!')
    .required('Required'),
  name: Yup.string()
    .required('Required')
});

const ResourceForm = ({formConfig, postResource, history, location, user, resources}) => (
  <div id='form-container'>
    <Formik
      initialValues={
        {
          cost: 0, 
          name: '',
          resource: []
        }
      }

      onSubmit={ async (values, actions) => { 
        const newResource = {
          ...values, 
          user_id: user

        };
        // const result =  await postResource(newResource);
  
        // actions.setSubmitting(false);
        // if (result) {
        //   actions.resetForm();
          actions.setStatus({ success: "Ticket Posted" });
        // }        
      }}

      validationSchema={SignupSchema}
      render={(props) => {
        const BASE_PROPS = {
          onChange: props.handleChange,
          onBlur: props.handleBlur,
        };
        const dropDownMenu = resources.data.reduce((acc, curr) => {
  
          acc.push( { resource_type_id: curr.attributes.resource_type_id, label: curr.attributes.name })
          
          return acc;
        }, [])
  
console.log(dropDownMenu)
        const inputNodes = location.formProp && formConfig[location.formProp].map(({html_tag, type, name, placeholder}, inputIx) => (
          <div key={inputIx} id={`resource-input-${inputIx + 1}`}>
            { html_tag === 'input' && 
              <input
                {...BASE_PROPS}
                type={type}
                value={props.values[name]}
                name={name}
                placeholder={placeholder}
                className='form-inputd'
              /> 
            }
            {props.status && props.status.success && 
            <div id={`${'resource-messages' + inputIx}`}>{props.status.success}
              <i className="material-icons" id='message-check'>
                check
              </i>
            </div>}
          </div>
        ));

        return (
          <form onSubmit={props.handleSubmit} className='resource-form'> 
              <label htmlFor='drop-down' className='label-drop-down'>Select Resource</label>
            <Select
              id="drop-down"
              options={dropDownMenu}
              multi={false}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.value} 
              className='drop-down-menu'
              />   
              {inputNodes}
            <button type='submit' id='submit-resource'>Submit</button>
          </form>
        );
      }}
    />
  </div>
);

ResourceForm.defaultProps = {
  formConfig
};

export const mapStateToProps = state => ({
  user: state.session.user_id,
  resources: state.resources
});

export const mapDispatchToProps = dispatch => ({
  postResouce: (resource) => dispatch(postResource(resource))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResourceForm)
);


