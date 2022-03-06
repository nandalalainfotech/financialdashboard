import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm: FormGroup | any;

  processing: Boolean = false;
  error: Boolean = false;


  // checkField  = CheckRequiredField;

  constructor(
    // private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    // if (this.authService.hasToken()) {
    //   this.handleLoginSuccess();
    // } else {
    //   this.initForm();
    // }
  }

  // private markFormGroupTouched(formGroup: FormGroup) {
	// 	(<any>Object).values(formGroup.controls).forEach((control: any) => {
	// 		control.markAsTouched();
	// 		if (control.controls) {
	// 			this.markFormGroupTouched(control);
	// 		}
	// 	});
	// }
  // checkRequiredClass(frmControl: string) {
  //   const t  = this.loginForm.get()
  //   return {
  //     'required' : false
  //   };
  // }

  onSubmitButtonClicked() {
    // this.error  = false;
    // this.processing  = false;
    // if (this.loginForm.valid) {
    //   this.login();
    // }
  }

login() {
  this.router.navigate(['/app-dash-board']);
    // this.processing  = true;
    // this.authService.login(this.loginForm.value).then(
    //   data => {
    //     if (data) {
    //       this.handleLoginSuccess();
    //     } else {
    //       this.handleLoginError();
    //     }
    //   },
    //   err => {
    //     console.log('---- ERROR ---- ');
    //     console.log(err);
    //     this.handleLoginError();
    //   });
  }

  private handleLoginSuccess() {
    this.processing = false;
    this.error  = false;
    this.router.navigate(['/dashboard']);
  }

  private handleLoginError() {
    this.processing = false;
    this.error  = true;
  }

  private initForm() {
    // this.loginForm = new FormGroup({
    //   username: new FormControl('', [ Validators.required, Validators.email]),
    //   password: new FormControl('', Validators.required),
    // });
  }


  // constructor() { }

  // ngOnInit(): void {
  // }

}
