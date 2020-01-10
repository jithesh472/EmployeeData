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
  MatExpansionModule, MatDividerModule, MatListModule, MatTableModule, MatIconModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './addEmployee/addEmployee.component';
import { EmployeeDetailsComponent, DialogDataExampleDialog } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    DialogDataExampleDialog
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
    MatListModule,
    MatTableModule,
    MatIconModule

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
    MatTableModule,
    MatIconModule
  ],
  entryComponents: [
    EmployeeDetailsComponent,
    DialogDataExampleDialog

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
