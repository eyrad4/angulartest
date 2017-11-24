import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-form-lists',
  templateUrl: './form-lists.component.html',
  styleUrls: ['./form-lists.component.css']
})
export class FormListsComponent implements OnInit {

  forms = [];

  constructor(private formsService: FormsService) { }

  ngOnInit() {
    this.formsService
    .getForms()
    .subscribe((response: Response) => {      
      const data = response.json();
      console.log(data);
      this.forms = data;
    });
  }

}
