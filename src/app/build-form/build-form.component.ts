import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';
import { ElemetsService } from '../elemets.service';

@Component({
  selector: 'app-build-form',
  templateUrl: './build-form.component.html',
  styleUrls: ['./build-form.component.css'],
})
export class BuildFormComponent implements OnInit {

  elements = [];

  constructor(private service: ElemetsService) { 
    this.optionsFrom = {
      group: {
        name: 'test',
        pull: 'clone',
        put: false
      },
      onEnd: (event: any) => {
        console.log(event['item']['innerText']);
       /*switch(event['item']['innerText']){
         case 'text':
         //console.log(this.test.find(event));        
         this.element = this.test[0];
         break;

         case 'select':
         //console.log(this.test.find(event));        
        this.element = this.test[1]
         break;
       }*/

       //this.onAdd(event['item']['innerText']);
       
      }
    };
  }
 
  items2 = ['a','b','c'];  

  optionsFrom: SortablejsOptions = {};

  optionsTo: SortablejsOptions = {
    group: 'test',
    draggable: ".item"
  };

  onAdd(args) {
    //this.items2.push(args);    
    console.log(this.items2.indexOf(args));
    //console.log(this.items2);
  }

  items3 = [{name: 'textbox'}, {name: 'select'}, {name: 'file'}];
  items4 = [];

  options: SortablejsOptions = {
    group: 'test'
  };

  ngOnInit() {
    this.elements = this.service.elements;    
  }

}
