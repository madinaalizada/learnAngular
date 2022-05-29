import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/Services/department.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  constructor(
    private departmentService: DepartmentService,
    private employeeServie: EmployeeService,
    private router: Router
  ) {}

  employee!: {
    name: string;
    imgUrl: string;
    department: string;
  };

  subscription!: Subscription;

  departments: string[] = [];

  ngOnInit(): void {
    this.employee = { name: '', imgUrl: '', department: '' };
    this.departments = this.departmentService.getAllDepartments();
  }

  onCreateEmp() {
    this.employeeServie.createEmployee(this.employee);
    this.router.navigate(['/employeeList']);
  }
}
