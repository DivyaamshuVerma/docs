import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private builder: FormBuilder, private service:AuthService,private router:Router) {
    this.registrationForm = this.builder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/)]],
      confirmPassword: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/[0-9]/), Validators.minLength(10), Validators.maxLength(10)]],
      role: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

 // validation for mobile number is required

  public get username() {
    return this.registrationForm.get('username');
  }

  public get email() {
    return this.registrationForm.get('email');
  }

  public get password() {
    return this.registrationForm.get('password');
  }

  public get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  public get mobileNumber() {
    return this.registrationForm.get('mobileNumber');
  }

  public get role() {
    return this.registrationForm.get('role');
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword) {
      return null;
    }
    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }


  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
      this.service.registerUser(this.registrationForm.value).subscribe(result=>{
        console.log(result);
        Swal.fire({
          title: "Greet",
          text: "Registration Sucessfully",
          icon: "success"
        });
        this.router.navigate(['/login']);
      },
      (error)=>{
        console.error(error);
        // alert("User Already Exists!!");
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "User Already Exists!!",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
        
      });
      
    }
  }
  ngOnInit(): void {
  }
}

