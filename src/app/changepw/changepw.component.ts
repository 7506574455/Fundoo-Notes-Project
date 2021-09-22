import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';
import { MatSnackBar} from  '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.scss']
})
export class ChangepwComponent implements OnInit {
  changepwForm!: FormGroup;
  token:any

  constructor(private formBuilder: FormBuilder, private userService:UserService, private activatedRoute: ActivatedRoute,
    private snackBar:MatSnackBar ) { }

  ngOnInit() {
    this.changepwForm = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]

  });

  }

   onSubmit() {
     this.token = this.activatedRoute.snapshot.paramMap.get('token')
     console.log(this.token);

     localStorage.setItem('token',this.token)

     console.log("onsubmit function is calling",this.changepwForm.value);
    
    let req={
      password: this.changepwForm.value.password,
      confirmPassword: this.changepwForm.value.confirmPassword

    }
    console.log(req)
    this.userService.changeUser(req).subscribe((response: any)=>{
      console.log(response);
      this.snackBar.open("password successfully ", ' ', {
        duration: 1000,
     });

    }, (error: any)  => {
      console.log(error);
      this.snackBar.open("password failed ", ' ', {
        duration: 1000,
     });
    })
   }

   showPassword(){
     let confirmPassword = document.getElementById('confirmPassword');
   }
   // convenience getter for easy access to form fields
get f() { return this.changepwForm.controls; }
   
}
