import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'app-render-form',
  templateUrl: './render-form.component.html',
  styleUrls: ['./render-form.component.css'],  
})
export class RenderFormComponent implements OnInit {

  @Input() elementItem = [];

  constructor() { }

  ngOnInit() {
  }

}
