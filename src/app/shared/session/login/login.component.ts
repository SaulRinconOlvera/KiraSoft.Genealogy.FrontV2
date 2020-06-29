import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {
  title = 'GenealogyFront';

  constructor(public translate: TranslateService) {
    // // this language will be used as a fallback when a translation isn't found in the current language
    // this.translate.setDefaultLang('en');

    // // the lang to use, if the lang isn't available, it will use the current loader to get them
    // this.translate.use('en');
  }
}
