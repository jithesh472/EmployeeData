import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  employeeData: any;
}
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  displayedColumns = ['Possition','FirstName','Gender','PermenentAddress','CurrentAddress','City','State','Country', 'Pin','edit','delete'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}
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
  

  openDialog( params: any ) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        employeeData: params
      }
    });
  }
  ngOnInit(){
  }

}

const ELEMENT_DATA = [
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
@Component({
  selector: 'employee-detail-popup',
  templateUrl: 'employee-details-popup.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  public employeeData = this.data.employeeData;
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(){}
}