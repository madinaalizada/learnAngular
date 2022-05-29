import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor() {}

  departments = [
    'SMM',
    'Core Banking',
    'UX/UI Designer',
    'IOS Developer',
    'Android Developer',
    'Reporting',
    'HelpDesk',
  ];

  getAllDepartments() {
    return this.departments;
  }
}
