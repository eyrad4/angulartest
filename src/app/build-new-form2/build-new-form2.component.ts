import { Component, OnInit, Input } from '@angular/core';
import { ElemetsService } from '../elemets.service';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-build-new-form2',
  templateUrl: './build-new-form2.component.html',
  styleUrls: ['./build-new-form2.component.css'],  
})
export class BuildNewForm2Component implements OnInit {

  elements = [];
  @Input() newElements = [];
  find = Object;

  constructor(private service: ElemetsService) {}

  addElement(event){
    //console.log(event.target.innerText);
    
    //console.log(this.service.elements);    
    //ищем элемент в нашем сервисе
    this.find =  this.elements.find(element => element.name == event.target.innerText);
    console.log(this.find);
    //добавляем найденый элемент в новый массив массив
    this.newElements.push(this.find);
  }

  //метод который будет удалять определенный элемент с формы
  deleteElement(index){
    console.log(index);
    this.newElements.splice(index, 1);
  }

  //метод который будет редактировать данные элемента
  editElement(){

  }

  //метод который будет сохранять изменения в элементе формы
  saveElement(){

  }

  //метод который сохранит данные формы в нашу псевдо басу json serv
  saveForm(){

  }

  ngOnInit() {
    this.elements = this.service.elements;      
  }

}
