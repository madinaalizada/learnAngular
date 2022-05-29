import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { CreateEmployeeComponent } from './employee-list/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee-list/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: EmployeeListComponent},
  {path: 'employeeList', component: EmployeeListComponent},
  {
    path: 'employeeList',
    component: EmployeeListComponent,
    children: [
      { path: ':id/edit', component: EditEmployeeComponent },
      { path: 'create', component: CreateEmployeeComponent }
     ],
  },
  {path: 'department', component: DepartmentComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
