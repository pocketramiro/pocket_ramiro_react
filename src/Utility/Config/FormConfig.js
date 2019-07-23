/* eslint-disable no-undef */

const formConfig = {
  tickets: [
    {
      html_tag: 'input',
      type: 'radio',
      name: 'priority',
      value: 'low',
      label: 'Low'
    },
    {
      html_tag: 'input',
      type: 'radio',
      name: 'priority',
      value: 'medium',
      label: 'Medium'
    },
    {
      html_tag: 'input',
      type: 'radio',
      name: 'priority',
      value: 'high',
      label: 'High'
    },
    {
      html_tag: 'input',
      type: 'radio',
      name: 'priority',
      value: 'urgent',
      label: 'Urgent'
    },
    {
      html_tag: 'input',
      type: 'radio',
      name: 'priority',
      value: 'safety',
      label: 'Safety'
    },
    {
      html_tag: 'textarea',
      name: 'notes',
      placeholder: 'Enter Ticket Notes'
    },
    {
      html_tag: 'input',
      type: 'button',
      name: 'create-ticket',
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
      placeholder: 1
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


