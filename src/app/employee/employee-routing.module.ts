import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AsignmentLetterComponent } from './asignment-letter/asignment-letter.component';

const routes: Routes = [
  { path: '', redirectTo: 'myprofile' },
  { path: 'myprofile' , component : MyprofileComponent },
  { path: 'assignmentletter', component : AsignmentLetterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
