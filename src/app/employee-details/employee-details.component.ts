import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})

export class EmployeeDetailsComponent implements OnInit {

  constructor() { }
  public employeeDetails = [
    {
      ProfileImage: '../../assets/download.jpeg',
      Possition: 'Web Developer',
      Description: '',
      FirstName: 'Darshan',
      MiddleName: 'A',
      LastName: 'A',
      Gender: 'Male',
      PermenentAddress: '#21 , 2nd floor, 3rd Crossroad, Marthahalli, Banglore , Karnataka',
      CurrentAddress: '#21 , 2nd floor, 3rd Crossroad, Marthahalli, Banglore , Karnataka',
      City: 'Banglore ',
      State: 'Karnataka',
      Country: 'India',
      Pin: 504458
    },
    {
      ProfileImage: '../../assets/download.jpeg',
      Possition: 'Web Developer',
      Description: '',
      FirstName: 'Darshan',
      MiddleName: 'A',
      LastName: 'A',
      Gender: 'Male',
      PermenentAddress: '#21 , 2nd floor, 3rd Crossroad, Marthahalli, Banglore , Karnataka',
      CurrentAddress: '#21 , 2nd floor, 3rd Crossroad, Marthahalli, Banglore , Karnataka',
      City: 'Banglore ',
      State: 'Karnataka',
      Country: 'India',
      Pin: 504458
    }
  ];
  ngOnInit() {
  }

}
