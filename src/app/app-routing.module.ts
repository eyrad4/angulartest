import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FormListsComponent } from './form-lists/form-lists.component';
import { BuildFormComponent } from './build-form/build-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';




const appRoutes: Routes = [
  {path: '', component: FormListsComponent},
  {path: 'newform', component: BuildFormComponent},
  {path: 'newform/:id', component: BuildFormComponent},    
  {path: 'editform', component: EditFormComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [],
})


export class AppRoutingModule {


}