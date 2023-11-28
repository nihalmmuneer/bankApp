import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Properties
  // Database
  aim = 'Perfect banking  Partner';
  usertext = 'Enter your username';
  accno = '';
  pswd = '';
  // db: any = {
  //   1000: { accno: 1000, username: 'Alex', password: 1000, balance: 10000 },
  //   1001: { accno: 1001, username: 'Roshan', password: 1002, balance: 5000 },
  //   1002: { accno: 1002, username: 'Joseph', password: 1003, balance: 15000 },
  // };
  // DEPENDENCY INJECTION
  constructor(private router: Router, private ds: DataService) {}
  ngOnInit(): void {}
  // User defined function
  // login(accno:any,password:any) {
  //   console.log("account number",accno)
  //   console.log("password",password)
  //   alert("Loggin Clicked")
  //   var account_number = this.accno;
  //   var user_password = this.pswd;
  //   var database = this.db;
  //   if (accno in database) {
  //     if (password == database[accno]['password']) {
  //       console.log('accno',database[accno].password)
  //       alert('Login Successful');
  //     } else {
  //       alert('Incorrect password');
  //     }
  //   } else {
  //     alert('User not found ');
  //   }
  // }
  // accountInputChange(event: any) {
  //   this.accno = event.target.value;
  //   console.log('this', this.accno);
  // }
  // accountPassword(event: any) {
  //   this.pswd = event.target.value;
  //   console.log(this.pswd);
  // }
  login() {
    var account_number = this.accno;
    var password = this.pswd;
    const result = this.ds.login(account_number, password);
    if (result) {
      alert('login successfull');
      this.router.navigateByUrl('dashboard');
    }
  }
}
