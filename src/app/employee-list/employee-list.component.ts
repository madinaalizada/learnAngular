import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  employees: any = [];
  subscription!: Subscription;

  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployees();
  }

  onDelete(id:number) {
    this.employees = this.employeeService.deleteEmployee(id);
  }
  ngOnDestroy(): void {

  }
}
