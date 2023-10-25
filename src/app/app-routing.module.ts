import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginComponent } from './login/login.component';

import { MarksComponent } from './marks/marks.component';
import { RegisterComponent } from './register/register.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},

  // {path:'',component:LoginComponent},

  { path: 'admin', component: RootComponent },

  { path: 'addStudent', component: AddStudentComponent },
    
      { path: 'marks', component: MarksComponent } 
      
    
 
  
  // { path: 'marks/:param1', component: MarksComponent}, // using route parameters
 
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


