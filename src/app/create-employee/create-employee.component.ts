import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  user: string = '';
  password: string = '';
  docType: string = '';
  firstName: string = '';
  lastName: string = '';
  entryDate: string = '';
  contractType: string = '';
  employeeStatus: string = '';
  immediateSup: string = '';

  updateEmployee(id: number): void {
    console.log('Update employee:', id);
    console.log('User:', this.user);
    console.log('Password:', this.password);
    console.log('Document Type:', this.docType);
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Entry Date:', this.entryDate);
    console.log('Contract Type:', this.contractType);
    console.log('Employee Status:', this.employeeStatus);
    console.log('Immediate Supervisor:', this.immediateSup);
  }

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( (data: any) =>{
      console.log(data);
      this.goToEmployeeList();
    },
      (    error: any) => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }


}








