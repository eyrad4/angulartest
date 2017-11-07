import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
