import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';
import { MatSnackBar} from  '@angular/material/snack-bar';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.scss']
})
export class ChangepwComponent implements OnInit {
  changepwForm!: FormGroup;
  submitted!: boolean;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.changepwForm = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]

  });

  }


// convenience getter for easy access to form fields
get f() { return this.changepwForm.controls; }

   onSubmit() {
    this.submitted = true;
    let req={
      password: this.changepwForm.value.password,
      confirmPassword: this.changepwForm.value.confirmPassword

    }
    console.log(req)
    this.userService.changeUser(req).subscribe((response: any)=>{
      console.log(response);
      this.snackBar.open("Login successfully ", ' ', {
        duration: 1000,
     });

    }, (error: any)  => {
      console.log(error);
      this.snackBar.open("Login failed ", ' ', {
        duration: 1000,
     });
    })
   }
}
