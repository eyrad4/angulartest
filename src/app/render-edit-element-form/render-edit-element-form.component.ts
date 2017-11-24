import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-render-edit-element-form',
  templateUrl: './render-edit-element-form.component.html',
  styleUrls: ['./render-edit-element-form.component.css'], 
})
export class RenderEditElementFormComponent implements OnInit {

  @Input() elementItem = [];

  constructor() { }

  ngOnInit() {
  }

}
