import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

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
    username:"",
    accno:"",
    psw: ""
  })
  constructor(
    private router: Router,
    private ds: DataService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {}
  register() {
    let uname = this.username;
    let accno = this.accno;
    let password = this.pswd;
    const result = this.ds.register(uname, accno, password);
    if (result) {
      alert('Registered Successfully!!');
      this.router.navigateByUrl('');
    } else {
      alert('Already a existing customer...Please login!!');
    }
  }
}
