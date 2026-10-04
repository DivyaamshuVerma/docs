import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router,private loginservice:AuthService) {
    console.log("inside authguard constructor")
   }
  canActivate(route: ActivatedRouteSnapshot):boolean{
    let role=localStorage.getItem('role')
    // console.log(""+this.loginservice.getLoginStatus());
      if (!localStorage.getItem('role')) {
        console.log("inside authguard method")
        this.router.navigate(["/"]);
        return false;
      }
      else{
        console.log("inside else")
        console.log(role)
        if(role=='Manager'){
//(currentUrl != "/adminviewfeedback")  &&  (currentUrl != "/dietplanrequests") &&  (currentUrl != "/requestedplan") && (currentUrl != "/adddietplan") && (!currentUrl.startsWith('/viewdietplan')) && (!currentUrl.startsWith('/editdietplan')) && !currentUrl.startsWith("/adminfeedback")
          let currentUrl:string=this.router.getCurrentNavigation().extractedUrl.toString();
          console.log("current url ",currentUrl)
          console.log((currentUrl.includes('maddproject')))
          if((currentUrl != "/maddproject")  &&  (!currentUrl.startsWith("/meditproject")) &&  (currentUrl != "/massignproject") && (currentUrl != "/mviewproposal") && (!currentUrl.startsWith('/mviewproject')) && (!currentUrl.startsWith('/mviewfeedback'))){
            this.router.navigate(["/error"]);
            return false;
          }
        }else if(role=='Employee'){
          let currentUrl:string=this.router.getCurrentNavigation().extractedUrl.toString();
          console.log((currentUrl.includes('wviewproposal')))
          if((currentUrl != "/eviewproposal") && (!currentUrl.startsWith('/eviewfeedback'))&& (currentUrl != "/eviewproject")&& (currentUrl != "/eaddproposal")&& (currentUrl != "/eaddfeedback")){
            this.router.navigate(["/error"]);
            return false;
          }
        }
 
        return true;
      }
  }
 
  
}
