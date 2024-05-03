import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {

    langSubject = new BehaviorSubject('en');
    constructor(
      private translate: TranslateService) {}
    currentLang(): string {
      const myLang = localStorage.getItem('language') || 'en';
      this.translate.setDefaultLang('en');
      if (myLang === null) {
        localStorage.setItem('language', 'en');
        this.translate.use('en');
        this.langSubject.next('en');
      } else {
        this.translate.use(myLang);
        this.langSubject.next(myLang);
      }
      return myLang;
    }
    switchLang(newLang: string): void {
      localStorage.setItem('language', newLang);
      this.translate.use(newLang);
      this.langSubject.next(newLang);
    }
    getTranslation(params: string): Observable<string> {
      return this.translate.get(params);
    }
    getTranslationInstant(params: string): string {
      return this.translate.instant(params);
    }

    
}
