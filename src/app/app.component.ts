import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vueling-challenge-test';

  constructor(private readonly translate: TranslateService) { 

    this.getNavigatorLanguage();
  }

  private getNavigatorLanguage() {

    let userLang: any = navigator.language.split('-')[0];
    userLang = /(en|de|it|fr|es|be|ca)/gi.test(userLang) ? userLang : 'en';

    this.setNavigatorLanguage(userLang);
  }

  private setNavigatorLanguage(language: string): void {

    this.translate.use(language);
    this.translate.setDefaultLang(language);
  }
}
