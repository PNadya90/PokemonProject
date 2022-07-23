import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalizationService } from 'src/app/internationalization/localization.service';
import { UserAccountService } from '../user-account/user-account.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  login: string;
  pass: string;
  lang: string="EN";
  constructor(private userSrv: UserAccountService, private localizationSrv: LocalizationService) { }

  ngOnInit(): void {
  }

  logIn() {
    this.userSrv.signIn(this.login, this.pass);
    console.log(this.login);


  }

  switchLang(lang: string) {
    this.lang=lang.split('-')[1];
    this.localizationSrv.useLanguage(lang);
  }
}
