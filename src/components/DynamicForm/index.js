import React from 'react';
import { connect } from 'react-redux';
import { postUser } from '../../thunks/postUser';
import { postPart } from '../../thunks/postPart';
import { Formik, Field } from 'formik';
import { formValues, formConfig, selectSchema } from '../../Utility/Config/FormConfig';
import { withRouter } from 'react-router';
import * as Yup from 'yup';

const DynamicForm = ({formConfig, postTicket, location, history}) => (
  
  <section className='form-container'>
    <h1>Form</h1>
    <Formik
      initialValues=
        {
          location.formProp && formValues[location.formProp]
        
        }
      onSubmit={(values, actions) => {
        const formType = location.formProp;
        
        switch (formType) {
        case 'tickets':
          postTicket(
            {
              ...values, table_key: 1,
              table_name: 'Resources',
              user_id: this.props.user.id
            }, 'id');
          history.push('/resources');
          break;
        case 'parts':
          postPart({
            ...values, 
          }, location.itemId);
          break;
        default:  
        }
        actions.setSubmitting(false);
        
      }} 

      // validationSchema={selectSchema(location.formProp)}
      render={(props) => {
       
        const BASE_PROPS = {
          onChange: props.handleChange,
          onBlur: props.handleBlur
        };
        const inputNodes = location.formProp && formConfig[location.formProp].map(({html_tag, type, name, placeholder, value, label}, inputIx) => {
        
          return (  
            <div key={inputIx} id='radio-wrapper'>
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
                html_tag === 'textarea' && <Field 
                  {...BASE_PROPS}
                  component={html_tag}
                  id={value}
                  name={name}
                  value={props.values.notes}
                  placeholder={placeholder}
                />}
              { 
                type === 'text' && <Field 
                  {...BASE_PROPS}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={props.values.name}
                />
              }
              { 
                type === 'number' && <Field 
                  {...BASE_PROPS}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={props.values.inventory}
                />
              }
              {props.errors[name] && <div id="feedback">{props.errors[name]}</div>}
            </div>
          );
        });

        return (
          <form onSubmit={props.handleSubmit} id='form-wrapper'>
            {inputNodes}
            <button type="submit">Submit</button>
          </form>
        );
      }}
    />
  </section>
);
    
DynamicForm.defaultProps = {
  formConfig
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  postUser: (user) => dispatch(postUser(user))
});

export default withRouter(
  connect(null, mapDispatchToProps)(DynamicForm)
);
