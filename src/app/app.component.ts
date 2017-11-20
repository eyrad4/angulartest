import { Component, OnInit } from '@angular/core';
import { ElemetsService } from './elemets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ElemetsService]
})
export class AppComponent {
  
  title = 'app';
  
}
