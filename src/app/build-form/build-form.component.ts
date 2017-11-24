import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { Response } from '@angular/http';

import { SortablejsOptions } from 'angular-sortablejs';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-build-form',
  templateUrl: './build-form.component.html',
  styleUrls: ['./build-form.component.css'],
})
export class BuildFormComponent implements OnInit {

  invoiceForm: FormGroup;

  constructor(private _formBuild: FormBuilder, private formsService: FormsService) {  }
  
  ngOnInit() {
    this.invoiceForm = this._formBuild.group({
      formid: [''],
      form_name: [''],
      form_description: [''],
      FormData: this._formBuild.array([])
    });
  }

  addRows(elementName) {
    let group = this._formBuild.group({
      label: [''],
      type: elementName,
      description: [''],
      required: [''],
      elementData: this._formBuild.array([])
    });   
    return group;
  } 

  addElement(elementName){
    const control: FormArray = this.invoiceForm.get(`FormData`) as FormArray;
    control.push(this.addRows(elementName));
  }

  deleteEelement(FormDataArray,index){
    console.log(FormDataArray);
    FormDataArray.removeAt(index)
  }

  showEdit(){
    
  }

  addSubElement(subElement:any) {
    let group = this._formBuild.group({
      sub_value:[''],
      sub_name: ['']      
    })
    subElement.push(group)
  }

  deleteSubEelement(mainElement, index){
    mainElement.controls.elementData.removeAt(index)
  }

  saveForm(){
   this.formsService.saveForm(this.invoiceForm.value).subscribe((response: Response) => {      
    const data = response.json();
    console.log(data);   
  });   
  }

}
