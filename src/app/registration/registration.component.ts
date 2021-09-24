import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';
import { MatSnackBar} from  '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private userService:UserService,private snackBar:MatSnackBar) { }

  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  
  });
}



   onSubmit() {
    console.log("onsubmit function calling", this.registerForm.value);
    let req={
      firstName: this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      confirmPassword:this.registerForm.value.confirmPassword,
      service:"advance"
  

    }
     console.log(req)
     this.userService.registerUser(req).subscribe((response: any)=>{
      console.log(response);
      this.snackBar.open("Registration successfully ", ' ', {
        duration: 1000,
      });

    }, (error: any) => {
      console.log(error); 
      this.snackBar.open("Registration failed ", ' ', {
        duration: 1000,   
    }) ;

  })

   }
   // convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
}