import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { Response } from '@angular/http';

import { SortablejsOptions } from 'angular-sortablejs';
import { FormsService } from '../forms.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-build-form',
  templateUrl: './build-form.component.html',
  styleUrls: ['./build-form.component.css'],
})
export class BuildFormComponent implements OnInit {

  invoiceForm: FormGroup;
  editForm: boolean = false;

  constructor(private _formBuild: FormBuilder, private formsService: FormsService, private route: ActivatedRoute) {  }
  
  ngOnInit() {
    this.invoiceForm = this._formBuild.group({
      formid: [''],
      form_name: [''],
      form_description: [''],
      FormData: this._formBuild.array([])
    });

    let formid = this.route.snapshot.params['id'];
    if(formid){
      this.editForm = true;
      let query = this.formsService.editForm(formid);     
      query.subscribe((response: Response) => {         
        const data = response.json();        
        console.log(data); 
        this.invoiceForm = this._formBuild.group(data);  
      });  
     }

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
   this.formsService
   .saveForm(this.invoiceForm.value)
   .subscribe((response: Response) => {      
    const data = response.json();
    console.log(data);   
  });   
  }

  editSaveForm(form){
    this.formsService.editSaveForm(form)
    .subscribe((response: Response) => {      
      const data = response.json();
      console.log(data);   
    });   ;
  }

}
