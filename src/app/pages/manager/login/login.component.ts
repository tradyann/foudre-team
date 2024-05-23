import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbNotificationRef, MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ToastComponent } from 'src/app/services/notifications/toast/toast.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    MdbFormsModule, 
    FormsModule,
    ReactiveFormsModule,
    MdbValidationModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  notificationRef: MdbNotificationRef<ToastComponent> | null = null;
  userForm!: FormGroup;

  baseUrl: string = environment.ApiBaseUrl;
  wait = false;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpClient,
    // private cypher: CypherService,
    private router: Router,
    private notificationService: MdbNotificationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group(
    { 
      email: new FormControl(null, { validators: [Validators.required, Validators.email],  updateOn: 'blur' }),
      password: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
    });
  }

  get email(): AbstractControl | null {
    return this.userForm.get('email');
  }
  get password(): AbstractControl | null {
    return this.userForm.get('password');
  }

  openToast() {
    this.notificationService.open(ToastComponent, {stacking: true, delay: 3000, autohide: true, data: { title: 'Error!', text: 'error message', colorClass: 'toast-danger'} });
  }

  onSubmitForm(): void {
      this.userForm.markAllAsTouched();
      this.wait = true;
      const formValue = this.userForm.value;
      if (formValue.password === null){
        this.password?.setErrors({'required': true});
        this.wait = false;
      } else if (formValue.email === null){
          // check if email or username exists
          this.email?.setErrors({ 'required': true });
          this.wait = false;
      } else if (this.userForm.valid){
          this.postData(formValue.username, formValue.email);
          //this.storeMulti(formValue.username, formValue.email).subscribe(res => { console.log(res) });
      } else {
        this.wait = false;
      }
  }

  postData(_email: string, _password: string): void {
    const header = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    this.httpService.post(this.baseUrl + 'api/xxxx/login', { email: _email, password: _password },
    {
      headers: header,
      //params: httpParams
    }).subscribe(
      (res: any) => {
        console.log(res);
        this.wait = false;
        if (res) {
          this.router.navigate(['/manager', 'home-events']); // change
        } else {
          this.router.navigate(['/manager', 'home-events']); // change
          this.notificationService.open(ToastComponent, {stacking: true, delay: 3000, autohide: true, data: { title: 'Error!', text: 'Please contact our support', colorClass: 'toast-danger'} });
        }
      },
      (err: HttpErrorResponse) => {
        this.router.navigate(['/manager', 'home-events']); // change
        console.log('error: ' + err.error);
        console.log('name: ' + err.name);
        console.log('message: ' + err.message);
        console.log('status: ' + err.status);
        console.log('error_description: ' + err.error.error_description);
        this.wait = false;
        this.notificationService.open(ToastComponent, {stacking: true, delay: 3000, autohide: true, data: { title: 'Error!', text: err.error.toString(), colorClass: 'toast-danger'} });
      }
    );
  }

}
