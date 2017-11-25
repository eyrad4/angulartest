import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import { FormsService } from '../forms.service';

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.css'],  
})
export class PreviewFormComponent implements OnInit {

  invoiceForm: FormGroup;
  editForm: boolean = false;
  formid;
  submitResult: any;

  constructor(private _formBuild: FormBuilder, private formsService: FormsService, private route: ActivatedRoute) {  }
  
  ngOnInit() {
    this.invoiceForm = this._formBuild.group({
      formid: [''],
      form_name: [''],
      form_description: [''],
      FormData: this._formBuild.array([])
    });

    this.formid = this.route.snapshot.params['id'];
    if(this.formid){
      this.editForm = true;
      let query = this.formsService.editForm(this.formid);     
      query.subscribe((response: Response) => {         
        const data = response.json();        
       // console.log(this._formBuild.array([data.FormData])); 
       //this.invoiceForm = this.toFormGroup(data.FormData);
       this.invoiceForm = new FormGroup({
        textbox_0: new FormControl('', Validators.minLength(2)),
        last: new FormControl(''),
      });
        this.invoiceForm = this._formBuild.group({
          formid: [''],
          form_name: data.form_name,
          form_description: data.form_description,
          FormData: this.addRowsEdit(data.FormData)
        });  

       
        
        
      });
     console.log(this.invoiceForm.value);
     }

  }



  addRowsEdit(arr) {
    return this._formBuild.array(arr.map(x => this._formBuild.group({
      label: x.label,
      type: x.type,
      description: x.description,
      required: x.required,
      elementData: this._formBuild.array(x.elementData.map(y => this._formBuild.group({
        sub_value: y.sub_value,
        sub_name: y.sub_name,        
      }        
      )))
    }
      
    )));
  }

  toFormGroup(form: any) {
    let group: any = {};
    let iteration = 0;
    let name;
    form.forEach(fromElement => {
      name = fromElement.type +'_'+ iteration;
      //console.log(name);
      group[name] = fromElement.required ? new FormControl(name || '', Validators.required) : new FormControl(name || '');
      iteration++
    });
    console.log(group);

    return new FormGroup(group);
  }

  

  submitForm(form: HTMLFormElement){
    console.log(form.value);
    this.submitResult = form.value;
  }

  

  

  

}
