import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';
import { MatSnackBar} from  '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted!: boolean;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

   onSubmit() {

    this.submitted = true;

    let req={
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
     
    }

    console.log(req)
    
    this.userService.loginUser(req).subscribe((response: any) =>{
      console.log(response);
      this.snackBar.open("Login successfully ", ' ', {
        duration: 1000,
     });

    }, (error:any) => {
      console.log(error);
      this.snackBar.open("Login failed ", ' ', {
        duration: 1000,
     });

    })
  

   }
}