import React from 'react';
import { connect } from 'react-redux';
import { postUser } from '../../thunks/postUser';
import { postPart } from '../../thunks/postPart';
import { Formik, Field } from 'formik';
import { withRouter } from 'react-router';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  notes: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
});

const partSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  inventory: Yup.string()
    .required('Required')
});



const CreateTicket = ({formConfig, postTicket, location, history}) => (
  
  <section className='form-container'>
    <h1>Form</h1>
    <Formik
      initialValues=
        {
          location.formProp && formValues[location.formProp]
        }
      onSubmit={ async (values, actions) => {
       
        const newUser = {...values, role: 'admin'};

        console.log(values);
        console.log(history)
        
        // const result =  await postUser(newUser);

        const formType = location.formProp;
        
        switch (formType) {
        case 'tickets':
          await postTicket(
            {
              ...values, table_key: 1,
              table_name: 'Resources',
              user_id: this.props.user.id
            }, 'id');
          history.push('/resources');
          break;
        case 'parts':
          await postPart({
            ...values, 
          }, location.itemId);
          break;
        default:  
        }
        actions.setSubmitting(false);
        
      }}

      validationSchema={partSchema}
      render={(props) => {
        const BASE_PROPS = {
          onChange: props.handleChange,
          onBlur: props.handleBlur
        };
        const inputNodes = location.formProp && formConfig[location.formProp].map(({html_tag, type, name, placeholder, value, label}, inputIx) => {
          console.log(location)
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
    

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  postUser: (user) => dispatch(postUser(user))
});

export default withRouter(
  connect(null, mapDispatchToProps)(CreateTicket)
);


const formValues = {
  tickets: {
    notes: '', 
    priority: ''
  },
  parts: {
    name: '',
    inventory: ''
  },
  resources: {
    cost: '',
    name: ''
  },
  resourceTypes: {
    category: '',
    company: '',
    contact_number: 0,
    contract_name: ''
  }

};


CreateTicket.defaultProps = {
  formConfig: {
    tickets: [
      {
        html_tag: 'input',
        type: 'radio',
        name: 'priority',
        value: 'low',
        label: 'low'
      },
      {
        html_tag: 'input',
        type: 'radio',
        name: 'priority',
        value: 'medium',
        label: 'medium'
      },
      {
        html_tag: 'input',
        type: 'radio',
        name: 'priority',
        value: 'high',
        label: 'high'
      },
      {
        html_tag: 'input',
        type: 'radio',
        name: 'priority',
        value: 'urgent',
        label: 'urgent'
      },
      {
        html_tag: 'input',
        type: 'radio',
        name: 'priority',
        value: 'safety',
        label: 'safety'
      },
      {
        html_tag: 'textarea',
        name: 'notes',
        placeholder: 'Enter Ticket Notes'
      }
    ],
    parts: [
      {
        html_tag: 'input',
        name: 'name',
        type: 'text',
        placeholder: 'Enter Part Name'
      },
      {
        html_tag: 'input',
        type: 'number',
        name: 'inventory',
        placeholder: 'Enter Number'
      }
    ],
    resources: [
      {
        html_tag: 'input',
        type: 'text',
        name: 'name',
        placeholder: 'Enter Name'
      },
      {
        html_tag: 'input',
        type: 'number',
        name: 'cost',
        placeholder: 'Enter Cost'
      }
    ],
    resourceType: [
      {
        html_tag: 'input',
        type: 'text',
        name: 'company',
        place: 'Enter Company'
      },
      {
        html_tag: 'input',
        type: 'text',
        name: 'category',
        placeholder: 'Enter Category'
      },
      {
        html_tag: 'input',
        type: 'number',
        name: 'contract number',
        placeholder: 'Enter Number'
      }
    ]
  }
};