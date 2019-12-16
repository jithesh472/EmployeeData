import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { AddEmployeeComponent } from '../app/addEmployee/addEmployee.component';
import { EmployeeDetailsComponent } from '../app/employee-details/employee-details.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'employeeDetails', component: EmployeeDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
