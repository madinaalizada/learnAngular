import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  employees = [
    {
      id: 1,
      name: 'Madina Alizade',
      imgUrl:
        'https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      department: 'Core Banking',
      status: 0,
    },
    {
      id: 2,
      name: 'Gulya Umarli',
      imgUrl:
        'https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      department: 'UX/UI Designer',
      status: 0,
    },
    {
      id: 3,
      name: 'Amrakh Amiraslanov',
      imgUrl:
        'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      department: 'SMM',
      status: 0,
    },
    {
      id: 4,
      name: 'Nadir Agayev',
      imgUrl:
        'https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      department: 'IOS Developer',
      status: 0,
    },
    {
      id: 5,
      name: 'Anar Quliyev',
      imgUrl:
        'https://images.unsplash.com/photo-1641824142582-e5b723d28806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYWNlaG9sZGVyJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      department: 'Core Banking',
      status: -1,
    },
    {
      id: 6,
      name: 'Orxan Aliyev',
      imgUrl:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      department: 'Reporting',
      status: 0,
    },
    {
      id: 7,
      name: 'Jale Agayeva',
      imgUrl:
        'https://images.unsplash.com/photo-1641824142582-e5b723d28806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYWNlaG9sZGVyJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      department: 'Android Developer',
      status: -1,
    },
    {
      id: 8,
      name: 'Xeyale Quliyeva',
      imgUrl:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      department: 'Core Banking',
      status: 0,
    },
    {
      id: 9,
      name: 'Kenan Cabbarli',
      imgUrl:
        'https://images.unsplash.com/photo-1641824142582-e5b723d28806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYWNlaG9sZGVyJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      department: 'Reporting',
      status: -1,
    },
  ];

  getAllEmployees() {
    const emps = [...this.employees];
    return emps.filter((e) => e.status !== -1);
  }

  deleteEmployee(id: number) {
    const emp = this.employees.find((e) => e.id == id);
    if (emp) {
      emp.status = -1;
    }
    return [...this.employees].filter((e) => e.status !== -1);
  }

  getEmployeeByID(id: number) {
    const emp = this.employees.find((e) => e.id == id);
    if (emp) {
      return emp;
    } else {
      throw new Error('InvalidID');
    }
  }

  editEmployee(
    id: number,
    _emp: { name: string; imgUrl: string; department: string }
  ) {
    return [
      ...this.employees.map((e) => {
        if (e.id == id) {
          e.name = _emp.name;
          e.imgUrl = _emp.imgUrl;
          e.department = _emp.department;
        }
      }),
    ];
  }

  createEmployee(_emp: { name: string; imgUrl: string; department: string }) {
    const id = [...this.employees].sort((a, b) => b.id - a.id)[0].id + 1;
    const emp = {
      id: id,
      name: _emp.name,
      imgUrl: _emp.imgUrl,
      department: _emp.department,
      status: 0,
    };
    this.employees.push(emp);
    return this.employees;
  }
}
