import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FormListsComponent } from './form-lists/form-lists.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { BuildNewForm2Component } from './build-new-form2/build-new-form2.component';
import { BuildFormComponent } from './build-form/build-form.component';


const appRoutes: Routes = [
  {path: '', component: FormListsComponent},
  {path: 'editform', component: EditFormComponent},
  {path: 'newform2', component: BuildNewForm2Component},
  {path: 'newform', component: BuildFormComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [],
})


export class AppRoutingModule {


}