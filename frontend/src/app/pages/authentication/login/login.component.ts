import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/models/response';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  hide: boolean = true;

  inputPassword: string = "password";

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertifyService: AlertifyService,
    private userService: UserService,
    private router: Router

  ) { 
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ["admin@bemtevi.com.br", [Validators.email]],
      password: "123",
    });
  }

  ngOnInit() {
  }

  submitFormLogin(){
    this.authService.login(this.form.value)
    .subscribe(
      (res: ResponseModel) => {
        console.log(res)
        this.alertifyService.success(res.message)

        this.userService.login(res.data)

        this.router.navigate(['/home'])

      },
      (error: ResponseModel) => {
        console.log(error)
        this.alertifyService.error(error.error.message)
      }
    )
  }

  OnResetUser(){}
}
