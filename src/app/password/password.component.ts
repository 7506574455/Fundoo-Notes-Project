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
  

  constructor(private formBuilder: FormBuilder, private userService:UserService, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      });
  
  }
  


   onSubmit() {
    console.log("onsubmit function calling",this.passwordForm.value);
    let req={
      
      email:this.passwordForm.value.email,
    }

    console.log(req)
    this.userService.passwordUser(req).subscribe((response: any)=>{
      console.log(response);
      this.snackBar.open("password send successfully ", ' ', {
        duration: 1000,
      });

    }, (error: any) => {
      console.log(error);
      this.snackBar.open("password sending failed ", ' ', {
        duration: 1000,
     });
    })

   }
   // convenience getter for easy access to form fields
get f() { return this.passwordForm.controls; }

}