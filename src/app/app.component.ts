import { Component } from '@angular/core';
import { Employee } from './models/employee';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// esta clase es exclusiva para devolver objetos
export class AppComponent {
  simpleAlert() {
    Swal.fire('Hello world!');
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
  }

  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      console.log(result);
      if (result.value) {
        this.employeeArray = this.employeeArray.filter(
          (employee) => employee != this.selectedEmployee
        );
        this.selectedEmployee = new Employee();
        Swal.fire('Deleted!', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled');
      }
    });
  }

  employeeArray: Employee[] = [
    { id: 1, name: 'Juana', country: 'Bolivia' },
    { id: 2, name: 'Andrea', country: 'Bolivia' },
    { id: 3, name: 'Alberto', country: 'Bolivia' },
  ];

  selectedEmployee: Employee = new Employee();

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }
  openForEDit(employee: Employee) {
    this.selectedEmployee = employee;
  }
}
