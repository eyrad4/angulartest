import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SortablejsModule } from 'angular-sortablejs';


import { FormListsComponent } from './form-lists/form-lists.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { renderFormElementPipe } from './render-form-element.pipe';
import { BuildNewForm2Component } from './build-new-form2/build-new-form2.component';
import { RenderFormComponent } from './render-form/render-form.component';
import { BuildFormComponent } from './build-form/build-form.component';




@NgModule({
  declarations: [
    AppComponent,
    FormListsComponent,   
    EditFormComponent,
    renderFormElementPipe,
    BuildNewForm2Component,
    RenderFormComponent,
    BuildFormComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,    
    SortablejsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

 
 }
 