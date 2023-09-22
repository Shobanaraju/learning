import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarksComponent } from './marks/marks.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  // { path: 'marks/:param1', component: MarksComponent}, // using route parameters
  
{path:'marks', component: MarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


