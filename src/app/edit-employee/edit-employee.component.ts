import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.repository';
import { EditEmployeeComponent } from './edit-employee.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EditEmployeeComponent', () => {
  let component: EditEmployeeComponent;
  let fixture: ComponentFixture<EditEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEmployeeComponent]
    });
    fixture = TestBed.createComponent(EditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: 'app-update-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class UpdateEmployeeComponent {
[x: string]: any;
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
}
