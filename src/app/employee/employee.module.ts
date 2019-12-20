import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AsignmentLetterComponent } from './asignment-letter/asignment-letter.component';
import { SidebarEmpComponent } from '../sidebar/sidebar-emp/sidebar-emp.component';


@NgModule({
  declarations: [
    MyprofileComponent,
    AsignmentLetterComponent,
  SidebarEmpComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
