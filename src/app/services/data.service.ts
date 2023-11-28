import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  db: any = {
    1000: { accno: 1000, username: 'Alex', password: 1000, balance: 10000 },
    1001: { accno: 1001, username: 'Roshan', password: 1002, balance: 5000 },
    1002: { accno: 1002, username: 'Joseph', password: 1003, balance: 15000 },
  };
  constructor() {}
  // login
  login(accno: any, pswd: any) { 
    let db = this.db;
    if (accno in db) {
      if (pswd == db[accno].password) {
        return true;
      } else {
        alert('Incorrect Password');
        return false;
      }
    } else {
      alert('User not found');
      return false;
    }
  }
  // register
  register(user_name: any, account_number: any, password: any) {
    let db = this.db;
    console.log('Current Database', db);
    if (account_number in db) {
      return false;
    } else {
      db[account_number] = {
        accno: account_number,
        username: user_name,
        password: password,
        balance: 0,
      };
      console.log('Updated Database', db);
      console.log('Inserted database', db[account_number]);
      return true;
    }
  }

  deposit(accno: any, password: any, amount: any) {
    let db = this.db;
    if (accno in db) {
      if (db[accno].password == password) {
        db[accno].balance += Math.floor(amount);
        console.log("updated database after deposit",db);
        return true;
      } else {
        alert("Incorrect Password");
        return false;
      }
    } else {
      alert("User not found");
      return false;
    }
  }
  withdraw(accno:any, password: any,amount: any){
    let db = this.db;
    if(accno in db) {
      if(db[accno].password == password){
        if(db[accno].balance > amount) {
          db[accno].balance -= Math.floor(amount);
          console.log("Updated Database after Withdrawal",db);
          return true;
        } else {
          alert("Your account doesn't have sufficient money")
          return false;
        }
      } else {
        alert("Incorrect Password");
        return false;
      }
    } else {
      alert("User not Found")
      return false;
    }
  }
}

