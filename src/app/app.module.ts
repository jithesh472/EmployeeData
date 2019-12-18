import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatFormFieldModule,  MatInputModule,
  MatRippleModule, MatCardModule, MatGridListModule, MatDialogModule,
  MatExpansionModule, MatDividerModule, MatListModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './addEmployee/addEmployee.component';
import { EmployeeDetailsComponent, DialogContentExampleDialog } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule,
  ],
  entryComponents: [
    EmployeeDetailsComponent, DialogContentExampleDialog
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
