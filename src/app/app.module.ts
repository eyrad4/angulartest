import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {DndModule} from 'ng2-dnd';

import { FormListsComponent } from './form-lists/form-lists.component';
import { BuildNewFormComponent } from './build-new-form/build-new-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';




@NgModule({
  declarations: [
    AppComponent,
    FormListsComponent,
    BuildNewFormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
