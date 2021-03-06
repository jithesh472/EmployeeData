import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './AddEmployee.component.html',
  styleUrls: ['./AddEmployee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  firstnameControl = new FormControl('', [
    Validators.required
  ]);
  lastnameControl = new FormControl('', [
    Validators.required
  ]);
  cityControl = new FormControl('', [
    Validators.required
  ]);
  stateControl = new FormControl('', [
    Validators.required
  ]);
  countryControl = new FormControl('', [
    Validators.required
  ]);
  pinControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(6)
  ]);
  phoneControl = new FormControl('', [
    Validators.required
  ]);
  ngOnInit() {
  }

}

