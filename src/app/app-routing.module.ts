import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"signup",component:SignupComponent, pathMatch:'full',
    {path:'',component:RegisterComponent}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
