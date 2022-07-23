import { Component, OnInit, ViewChild } from '@angular/core';
import { UserAccountService } from '../user-account/user-account.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
   login:string;
   pass:string;
  constructor(private userSrv:UserAccountService) { }

  ngOnInit(): void {
  }

  logIn(){
    this.userSrv.signIn(this.login, this.pass);
    console.log(this.login);
    
    
  }
}
