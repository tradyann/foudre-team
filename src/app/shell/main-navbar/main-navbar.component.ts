import { Component } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent {
  darkMode = '';
  countryCode = '';
  countryFlag = '';
  langues = [
    { value: 'en', label: 'EN', countryFlag: 'us' },
    { value: 'fr', label: 'FR', countryFlag: 'fr' },
  ];

  constructor(private translationService: TranslationService) {
    this.countryCode = this.translationService.currentLang();
    this.updateCountryFlag(this.countryCode);
    if(localStorage.getItem('mdbtheme') === 'dark' && document.body.classList.value !== 'dark') {
      this.toggleSkin();
    }
  }
  
  toggleSkin() {
    document.body.classList.toggle('dark');
    this.darkMode = this.darkMode === 'dark' ? '': 'dark';
  }

  setLanguage(countryCode: string): void {
    this.countryCode = countryCode.toLowerCase();
    this.updateCountryFlag(this.countryCode);
    this.translationService.switchLang(countryCode);
  }

  private updateCountryFlag(countryCode: string): void {
    const language = this.langues.find(lang => lang.value === countryCode);
    this.countryFlag = language ? language.countryFlag : '';
  }
}
