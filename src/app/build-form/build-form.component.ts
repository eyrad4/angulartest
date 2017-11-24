import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';

import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-build-form',
  templateUrl: './build-form.component.html',
  styleUrls: ['./build-form.component.css'],
})
export class BuildFormComponent implements OnInit {

  invoiceForm: FormGroup;

  constructor(private _formBuild: FormBuilder) {  }
  
  ngOnInit() {
    this.invoiceForm = this._formBuild.group({
      formid: [''],
      form_name: [''],
      form_description: [''],
      FormData: this._formBuild.array([])
    });
  }

}
