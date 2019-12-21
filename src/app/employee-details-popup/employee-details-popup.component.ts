import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-details-popup',
  templateUrl: './employee-details-popup.component.html',
  styleUrls: ['./employee-details-popup.component.scss']
})
export class EmployeeDetailsPopupComponent implements OnInit {
@Input('employeeData') employeeData:any;
  constructor() { }

  ngOnInit() {

    console.log(this.employeeData);
  }

}
