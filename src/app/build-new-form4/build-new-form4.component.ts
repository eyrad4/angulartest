import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SortablejsOptions } from 'angular-sortablejs';
import { ElemetsService } from '../elemets.service';

@Component({
  selector: 'app-build-new-form4',
  templateUrl: './build-new-form4.component.html',
  styleUrls: ['./build-new-form4.component.css'], 
})
export class BuildNewForm4Component implements OnInit {

  invoiceForm: FormGroup;
  elements = []; //это наш сервис с данными  
  
  constructor(private _formBuild: FormBuilder, private service: ElemetsService) {  }

  ngOnInit() {
    this.invoiceForm = this._formBuild.group({
      formid: [''],
      Form_Title: [''],
      form_Description: [''],
      FormData: this._formBuild.array([])
    });
    this.elements = this.service.elements;  
  }

  addRows(elementName) {
    let group = this._formBuild.group({
      label: [''],
      type: elementName,
      description: [''],
      required: [''],
      elementData: this._formBuild.array([])
    });
   //this.addSubElement(group.controls.elementData)
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
 
  
 

}
