/* eslint-disable no-undef */
import * as Yup from 'yup';
const formConfig = {
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
};

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

export {
  formConfig,
  formValues,
};

const formValidation = 
[
  {
    parts: {
      name: Yup.string()
        .min(1, 'Too Short!')
        .required('Required'),
      inventory: Yup.string()
        .required('Required')
    }
  },
  {
    tickets: {
      notes: Yup.string()
        .min(1, 'Too Short!')
        .required('Required'),
    }
  }
];

