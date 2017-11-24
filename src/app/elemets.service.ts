export class ElemetsService {

    elements = [
        {
          name: 'textbox',
          index: 0,
          label: 'Label text',
          placeholder: 'Placeholder',    
          required: false
        },
        {
          name: 'select',
          index: 1,
          label: 'Label text',    
          required: false,
          options: [
            {value: 'value 1'},
            {value: 'value 2'},
            {value: 'value 3'}            
          ]
        },
        {
          name: 'checkbox',
          index: 2,
          label: 'Label text',    
          required: false,
          options: [
            {value: 'value 1', name: 'name 1'},
            {value: 'value 2', name: 'name 2'},
            {value: 'value 3', name: 'name 3'}      
          ]
        },
       {
          name: 'radio',
          index: 3,
          label: 'Label text',    
          required: false,
          options: [
            {value: 'value 1', name: 'name 1'},
            {value: 'value 2', name: 'name 2'},
            {value: 'value 3', name: 'name 3'}         
          ]
        },
        {
          name: 'textarea',
          index: 4,
          label: 'Label text',
          placeholder: 'Placeholder',      
          required: false,    
        },
        {
          name: 'file',
          index: 5,
          label: 'Label text',        
          vrequired: false,    
        },
      ];
}