import React from 'react';
import { connect } from 'react-redux';
import { postUser } from '../../thunks/postUser';
import { Formik, Field } from 'formik';
import { withRouter } from 'react-router';
import * as Yup from 'yup';
import { directive } from '@babel/types';

const SignupSchema = Yup.object().shape({
  notes: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  priority: Yup.string()
    .required('Required')
});

const CreateTicket = ({formConfig, postTicket, history, location}) => (
  
  <section className='form-container'>
    <h1>Form</h1>
    <Formik
      initialValues=
      {
       location.formProp && formValues[location.formProp]
      }
      // {
      //   {
      //     notes: '', 
      //     priority: 'low'
      //   }
      // }
      onSubmit={ async (values, actions) => {
       
        const newUser = {...values, role: 'admin'};

        const result =  await postUser(newUser);
 
        actions.setSubmitting(false);
        if (result) {
          history.push('/login');
        }
        
      }}

      validationSchema={SignupSchema}
      render={(props) => {
        const BASE_PROPS = {
          onChange: props.handleChange,
          onBlur: props.handleBlur
        };

        console.log(formConfig[location.formProp]);
        const inputNodes = location.formProp && formConfig[location.formProp].map(({html_tag, type, name, placeholder, value, label}, inputIx) => {
          // const textArea = (
          //   <textarea
          //     {...BASE_PROPS}
          //     value={props.values.notes}
          //     name={name}
          //     placeholder={placeholder}
          //   ></textarea>
          // );
          // const inputArea = (
          //   <div>
          //     <input
          //       {...BASE_PROPS}
          //       id={value}
          //       type={type}
          //       value={props.values[name]}
          //       name={name}
          //       placeholder={placeholder}
          //     />
          //     <label htmlFor={value}>{value}</label>
          //   </div>
          // );
          return (  
            <div key={inputIx}>
              { html_tag === 'input' && 
              <div>
                <Field 
                  {...BASE_PROPS}
                  type={type}
                  name={name}
                  value={props.values.priority}
                  placeholder={placeholder}
                  id={value}
                  checked={value === value}
                /> 
                <label htmlFor={label}>{label}</label>
              </div>
              }
              {html_tag === 'textarea' && <Field 
                {...BASE_PROPS}
                component={html_tag}
                id={value}
                name={name}
                value={props.values.notes}
                placeholder={placeholder}
              />}
              {props.errors[name] && <div id="feedback">{props.errors[name]}</div>}
            </div>
          );
        });

        return (
          <form onSubmit={props.handleSubmit}>
            {inputNodes}
            <button type="submit">Submit</button>
          </form>
        );
      }}
    />
  </section>
);
    
// CreateTicket.defaultProps = {
//   formConfig: [
//     {
//       html_tag: 'textarea',
//       name: 'notes',
//       placeholder: 'Enter Ticket Notes'
//     },
//     {
//       html_tag: 'input',
//       type: 'text',
//       name: 'name',
//       placeholder: 'Name'
//     },
//     {
//       html_tag: 'input',
//       type: 'radio',
//       name: 'priority',
//       value: 'low',
//     },
//     {
//       html_tag: 'input',
//       type: 'radio',
//       name: 'priority',
//       value: 'medium',
//     },
//     {
//       html_tag: 'input',
//       type: 'radio',
//       name: 'priority',
//       value: 'high',
//     },
//     {
//       html_tag: 'input',
//       type: 'radio',
//       name: 'priority',
//       value: 'urgent',
//     },
//     {
//       html_tag: 'input',
//       type: 'radio',
//       name: 'priority',
//       value: 'safety',
//     }
//   ]
// };

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
    notes: 'We did it!', 
    priority: ''
  },
  parts: {
    name: '',
    inventory: 0
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

}
const tickets = 
  {
  };

const parts = {
};

const resourceValue = {
};

const resourceTypeValue = {
};

CreateTicket.defaultProps = {
  formConfig: {
    tickets: [
      {
        html_tag: 'textarea',
        name: 'notes',
        placeholder: 'Enter Ticket Notes'
      },
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
      }
    ],
    parts: [
      {
        html_tag: 'input',
        name: 'name',
        placeholder: 'Enter Part Name'
      },
      {
        html_tag: 'input',
        type: 'number',
        name: 'inventory'
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