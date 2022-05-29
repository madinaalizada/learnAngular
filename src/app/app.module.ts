import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployeeComponent } from './employee-list/edit-employee/edit-employee.component';
import { CreateEmployeeComponent } from './employee-list/create-employee/create-employee.component';
import { HeaderComponent } from './header/header.component';
import { DepartmentComponent } from './department/department.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    CreateEmployeeComponent,
    HeaderComponent,
    DepartmentComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
