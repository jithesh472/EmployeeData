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
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailsPopupComponent } from './employee-details-popup/employee-details-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeDetailsPopupComponent
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
    EmployeeDetailsComponent,EmployeeDetailsPopupComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
