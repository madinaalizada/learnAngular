import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/Services/department.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit, OnDestroy {
  constructor(
    private departmentService: DepartmentService,
    private employeeServie: EmployeeService,
    private route: ActivatedRoute
  ) {}

  employee!: {
    name: string;
    imgUrl: string;
    department: string;
  };

  subscription!: Subscription;

  departments: string[] = [];

  ngOnInit(): void {
    this.departments = this.departmentService.getAllDepartments();
    let id: number = +this.route.snapshot.params['id'];
    const emp = this.employeeServie.getEmployeeByID(id);
    this.employee = {
      name: emp.name,
      imgUrl: emp.imgUrl,
      department: emp.department,
    };

    this.subscription = this.route.params.subscribe((params: Params) => {
      let emp = this.employeeServie.getEmployeeByID(+params['id']);
      this.employee = {
        name: emp.name,
        imgUrl: emp.imgUrl,
        department: emp.department,
      };
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditEmp() {
    let id: number = +this.route.snapshot.params['id'];
    this.employeeServie.editEmployee(id, this.employee);
  }
}
