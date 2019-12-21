import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { inherits } from 'util';
import { EmployeeDetailsPopupComponent } from '../employee-details-popup/employee-details-popup.component';

// let employeeData: any = '';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  // public employeeData: any;
  employeeData : any ="default" ;
  constructor(public dialog: MatDialog) { }
  public  employeeDetails = [
    {
      ProfileImage: '../../assets/download.jpeg',
      Possition: 'Web Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Darshan',
      MiddleName: 'A',
      LastName: 'Kumar',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Joseph',
      MiddleName: 'Jorge',
      LastName: 'L',
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
      Possition: 'UI Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Rahul',
      MiddleName: 'P',
      LastName: 'S',
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
      Possition: ' Tester',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Sebastian',
      MiddleName: 'P',
      LastName: 'S',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Rahul',
      MiddleName: 'P',
      LastName: 'S',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Rahul',
      MiddleName: 'P',
      LastName: 'S',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Caption',
      MiddleName: 'Marvel',
      LastName: 'S',
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
      Possition: 'Java Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Rahul',
      MiddleName: 'P',
      LastName: 'S',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Linda',
      MiddleName: 'M',
      LastName: 'K',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Evan',
      MiddleName: 'M',
      LastName: 'M',
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
      Possition: '.Net Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Chris',
      MiddleName: 'P',
      LastName: 'Sam',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Paul',
      MiddleName: 'P',
      LastName: 'John',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Johns',
      MiddleName: 'Paul',
      LastName: 'S',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Rahul',
      MiddleName: 'P',
      LastName: 'S',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'John',
      MiddleName: 'P',
      LastName: 'Sam',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Rahul',
      MiddleName: 'P',
      LastName: 'S',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Ram',
      MiddleName: 'PS',
      LastName: 'V',
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
      Possition: 'Java Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Rahul',
      MiddleName: 'P',
      LastName: 'S',
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
      Possition: 'Mobile Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'Test',
      MiddleName: 'D',
      LastName: 'Test',
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
      Possition: '.Net Developer',
      // tslint:disable-next-line:max-line-length
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      FirstName: 'test',
      MiddleName: 'P',
      LastName: 'S',
      Gender: 'Male',
      PermenentAddress: '#21 , 2nd floor, 3rd Crossroad, Marthahalli, Banglore , Karnataka',
      CurrentAddress: '#21 , 2nd floor, 3rd Crossroad, Marthahalli, Banglore , Karnataka',
      City: 'Banglore ',
      State: 'Karnataka',
      Country: 'India',
      Pin: 504458
    },
  ];
  openDialog(param) {

    this.employeeData = param; 
    this.dialog.open(EmployeeDetailsPopupComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  ngOnInit() {
  }

}
// @Component({
//   // tslint:disable-next-line:component-selector
//   selector: 'employee-details-popup',
//   templateUrl: 'employee-details-popup.html',
//   styleUrls: ['./employee-details.component.scss']
// })
// // tslint:disable-next-line:component-class-suffix
// class DialogContentExampleDialog  implements EmployeeDetailsComponent{
//   constructor() {}

  
//   // public employeeData = {
//   //   City: 'Banglore ',
//   //   Country: 'India',
//   //   CurrentAddress: '#21 , 2nd floor, 3rd Crossroad, Marthahalli, Banglore , Karnataka',
//   //   // tslint:disable-next-line:max-line-length
//   //   Description: 'Lorem Ipsum industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
//   //   FirstName: 'Joseph',
//   //   Gender: 'Male',
//   //   LastName: 'L',
//   //   MiddleName: 'Jorge',
//   //   PermenentAddress: '#21 , 2nd floor, 3rd Crossroad, Marthahalli, Banglore , Karnataka',
//   //   Pin: 504458,
//   //   Possition: 'Mobile Developer',
//   //   ProfileImage: '../../assets/download.jpeg',
//   //   State: 'Karnataka',
//   // };

// }
