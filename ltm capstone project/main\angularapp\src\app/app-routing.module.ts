import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ErrorComponent } from './components/error/error.component';
import { ManagernavComponent } from './components/managernav/managernav.component';
import { EmployeenavComponent } from './components/employeenav/employeenav.component';
import { EmployeeAddProposalComponent } from './components/employee-add-proposal/employee-add-proposal.component';
import { EmployeeViewProposalComponent } from './components/employee-view-proposal/employee-view-proposal.component';
import { EmployeeviewfeedbackComponent } from './components/employeeviewfeedback/employeeviewfeedback.component';
import { EmployeeViewProjectComponent } from './components/employee-view-project/employee-view-project.component';
import { EmployeeaddfeedbackComponent } from './components/employeeaddfeedback/employeeaddfeedback.component';
import { ManagerAddProjectComponent } from './components/manager-add-project/manager-add-project.component';
import { ManagerEditProjectComponent } from './components/manager-edit-project/manager-edit-project.component';
import { ManagerViewProjectComponent } from './components/manager-view-project/manager-view-project.component';
import { ManagerviewfeedbackComponent } from './components/managerviewfeedback/managerviewfeedback.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManagerViewProposalComponent } from './components/manager-view-proposal/manager-view-proposal.component';
import { ManangerAssignProjectComponent } from './components/mananger-assign-project/mananger-assign-project.component';
import { AuthGuardGuard } from './authguard/auth-guard.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:"error",component:ErrorComponent},
  {path:"home",component:HomeComponent},
  {path:"manager",component:ManagernavComponent},
  {path:"employee",component:EmployeenavComponent},
  {path:"eviewproposal",component:EmployeeViewProposalComponent,canActivate:[AuthGuardGuard]},
  {path:"eviewfeedback",component:EmployeeviewfeedbackComponent,canActivate:[AuthGuardGuard]},
  {path:"eviewproject",component:EmployeeViewProjectComponent,canActivate:[AuthGuardGuard]},
  {path:"eaddproposal",component:EmployeeAddProposalComponent,canActivate:[AuthGuardGuard]},
  {path:"eaddfeedback",component:EmployeeaddfeedbackComponent,canActivate:[AuthGuardGuard]},
  {path:"maddproject",component:ManagerAddProjectComponent,canActivate:[AuthGuardGuard]},
  {path:"meditproject",component:ManagerEditProjectComponent,canActivate:[AuthGuardGuard]},
  {path:"massignproject",component:ManangerAssignProjectComponent,canActivate:[AuthGuardGuard]},
  {path:"mviewproposal",component:ManagerViewProposalComponent,canActivate:[AuthGuardGuard]},
  {path:"mviewproject",component:ManagerViewProjectComponent,canActivate:[AuthGuardGuard]},
  {path:"mviewfeedback",component:ManagerviewfeedbackComponent,canActivate:[AuthGuardGuard]},
  {path:"navbar",component:NavbarComponent,canActivate:[AuthGuardGuard]},
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: '**', redirectTo: '/error' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }