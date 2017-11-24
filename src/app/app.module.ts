import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { SortablejsModule } from 'angular-sortablejs';


import { FormListsComponent } from './form-lists/form-lists.component';
import { BuildFormComponent } from './build-form/build-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { renderFormElementPipe } from './render-form-element.pipe';
import { RenderFormComponent } from './render-form/render-form.component';
import { RenderEditElementFormComponent } from './render-edit-element-form/render-edit-element-form.component';
import { FormsService } from './forms.service';





@NgModule({
  declarations: [
    AppComponent,
    FormListsComponent,   
    EditFormComponent,
    renderFormElementPipe,    
    RenderFormComponent,
    BuildFormComponent,
    RenderEditElementFormComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    SortablejsModule,
    HttpModule
  ],
  providers: [FormsService],
  bootstrap: [AppComponent]
})

export class AppModule {

 
 }
 