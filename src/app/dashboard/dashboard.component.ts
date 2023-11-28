import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  accno = '';
  pswd = '';
  amount = '';
  accno1 = '';
  pswd1 = '';
  amount1 = '';
  constructor(private db: DataService) {}
  ngOnInit(): void {}
  deposit() {
    const accno = this.accno;
    const password = this.pswd;
    const amount = this.amount;
    const result = this.db.deposit(accno, password, amount);
    if (result) {
      alert('Deposited Successfully');
    }
  }
  withdraw() {
    const accno = this.accno1;
    const password = this.pswd1;
    const amount = this.amount1;
    const result = this.db.withdraw(accno, password, amount);
    if (result) {
      alert('Withdrawal Successful');
    }
  }
}
