import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username = '';
  accno = '';
  pswd = '';

  // form group
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    accno: [''],
    pswd: [''],
  });
  constructor(
    private router: Router,
    private ds: DataService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {}
  register() {
    let uname = this.registerForm.value.username;
    let accno = this.registerForm.value.accno;
    let password = this.registerForm.value.pswd;
    console.log('status',this.registerForm.valid)
    if(this.registerForm.get('username')?.errors){
      alert("Invalid username")
    }
    if (this.registerForm.valid) {
      const result = this.ds.register(uname, accno, password);
      if (result) {
        alert('Registered Successfully!!');
        this.router.navigateByUrl('');
      } else {
        alert('Already a existing customer...Please login!!');
      }
    } else {
      alert('Invalid');
    }
  }
}
