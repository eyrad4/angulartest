import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-new-form',
  templateUrl: './build-new-form.component.html',
  styleUrls: ['./build-new-form.component.css'],  
})
export class BuildNewFormComponent implements OnInit {

  formElements: Object = [
    {id: 1, name: 'input'},
    {id: 2, name: 'select'},
    {id: 3, name: 'radio'},
    {id: 4, name: 'file'},
    {id: 5, name: 'textarea'},
    {id: 6, name: 'checkbox'},
  ];

  newForm: Array<any> = [];
  addTo($event: any) {
      this.newForm.push($event.dragData);
  }

  constructor() { }

  ngOnInit() {
  }

}
