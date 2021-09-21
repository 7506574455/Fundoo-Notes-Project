import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';
import { MatSnackBar} from  '@angular/material/snack-bar';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  passwordForm!: FormGroup;
  submitted!: boolean;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      });
  
  }
  

// convenience getter for easy access to form fields
get f() { return this.passwordForm.controls; }

   onSubmit() {
    this.submitted = true;
    let req={
      email:this.passwordForm.value.email,
    }

    console.log(req)
    this.userService.passwordUser(req).subscribe((response: any)=>{
      console.log(response);
      this.snackBar.open("Login successfully ", ' ', {
        duration: 1000,
     });

    }, (error: any) => {
      console.log(error);
      this.snackBar.open("Login failed ", ' ', {
        duration: 1000,
     });
    })

   }
}