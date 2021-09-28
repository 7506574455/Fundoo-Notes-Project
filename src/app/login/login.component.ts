import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';
import { MatSnackBar} from  '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private userService:UserService, private snackBar:MatSnackBar,
    private router:Router) { }

  ngOnInit() {
   
  
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

}
  


   onSubmit() {

    console.log("onsubmit function is calling", this.loginForm.value);

    let req={
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
     
    }

    console.log(req)
    
    this.userService.loginUser(req).subscribe((response: any) =>{
      console.log(response);
      localStorage.setItem('token',response.id)
      this.router.navigateByUrl('/dashboard/notes')

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
   // convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }
}
