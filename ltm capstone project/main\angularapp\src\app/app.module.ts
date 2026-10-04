import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManagerEditProjectComponent } from './components/manager-edit-project/manager-edit-project.component';
import { ManagerviewfeedbackComponent } from './components/managerviewfeedback/managerviewfeedback.component';
import { ManagernavComponent } from './components/managernav/managernav.component';
import { ManagerViewProjectComponent } from './components/manager-view-project/manager-view-project.component';
import { ManagerAddProjectComponent } from './components/manager-add-project/manager-add-project.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { EmployeeviewfeedbackComponent } from './components/employeeviewfeedback/employeeviewfeedback.component';
import { EmployeenavComponent } from './components/employeenav/employeenav.component';
import { EmployeeaddfeedbackComponent } from './components/employeeaddfeedback/employeeaddfeedback.component';
import { EmployeeAddProposalComponent } from './components/employee-add-proposal/employee-add-proposal.component';
import { EmployeeViewProjectComponent } from './components/employee-view-project/employee-view-project.component';
import { EmployeeViewProposalComponent } from './components/employee-view-proposal/employee-view-proposal.component';
import { AuthguardComponent } from './components/authguard/authguard.component';
import { AuthorizationInterceptor } from './interceptor/authorization-interceptor';
import { ManagerViewProposalComponent } from './components/manager-view-proposal/manager-view-proposal.component';
import { ManangerAssignProjectComponent } from './components/mananger-assign-project/mananger-assign-project.component';
// import { ManagerViewProposalComponent } from './manager-view-proposal/manager-view-proposal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddProposalComponent,
    EmployeeviewfeedbackComponent,
    EmployeenavComponent,
    EmployeeaddfeedbackComponent,
    EmployeeViewProposalComponent,
    EmployeeViewProjectComponent,
    RegistrationComponent,
    NavbarComponent,
    ManagerviewfeedbackComponent,
    ManagernavComponent,
    ManagerViewProjectComponent,
    ManagerEditProjectComponent,
    ManagerAddProjectComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    AuthguardComponent,
    ManagerViewProposalComponent,
    ManangerAssignProjectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule
    

  ],
  providers: [
   {provide:HTTP_INTERCEPTORS,useClass:AuthorizationInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }