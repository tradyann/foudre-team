import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Translation Imports
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MDB Angular UI Kit Imports
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbAutocompleteModule } from 'mdb-angular-ui-kit/autocomplete';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbChartModule } from 'mdb-angular-ui-kit/charts';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbInfiniteScrollModule } from 'mdb-angular-ui-kit/infinite-scroll';
import { MdbLazyLoadingModule } from 'mdb-angular-ui-kit/lazy-loading';
// import { MdbLightboxModule } from 'mdb-angular-ui-kit/lightbox';
import { MdbLoadingModule } from 'mdb-angular-ui-kit/loading';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';
import { MdbPopconfirmModule } from 'mdb-angular-ui-kit/popconfirm';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRatingModule } from 'mdb-angular-ui-kit/rating';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollbarModule } from 'mdb-angular-ui-kit/scrollbar';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbSmoothScrollModule } from 'mdb-angular-ui-kit/smooth-scroll';
import { MdbStepperModule } from 'mdb-angular-ui-kit/stepper';
import { MdbStickyModule } from 'mdb-angular-ui-kit/sticky';
import { MdbTableModule } from 'mdb-angular-ui-kit/table';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTimepickerModule } from 'mdb-angular-ui-kit/timepicker';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
// import { MdbMultiRangeModule } from 'mdb-angular-ui-kit/multi-range';
import { MdbCalendarModule } from 'mdb-angular-calendar';
import { MdbWysiwygModule } from 'mdb-angular-wysiwyg';
import { MdbDragAndDropModule } from 'mdb-angular-drag-and-drop';
// import { MdbVectorMapModule } from 'mdb-angular-vector-maps';
import { MdbFileUploadModule } from 'mdb-angular-file-upload';
import { MdbTreeviewModule } from 'mdb-angular-treeview';
import { MdbTransferModule } from 'mdb-angular-transfer';
import { MdbMentionModule } from 'mdb-angular-mention';
import { MdbCookiesManagementService } from 'mdb-angular-cookies-management';
import { MdbStorageManagementService } from 'mdb-angular-storage-management';
// import { MdbOnboardingModule } from 'mdb-angular-onboarding';
import { MdbParallaxModule } from 'mdb-angular-parallax';
import { MdbInputMaskModule } from 'mdb-angular-input-mask';
import { MdbCountdownModule } from 'mdb-angular-countdown';
import { MdbScrollStatusService } from 'mdb-angular-scroll-status';
import { MdbMultiItemCarouselModule } from 'mdb-angular-multi-item-carousel';
import { MdbEcommerceGalleryModule } from 'mdb-angular-ecommerce-gallery';
import { MdbColorPickerModule } from 'mdb-angular-color-picker';
import { MdbCaptchaModule } from 'mdb-angular-captcha';
import { MdbOrganizationChartModule } from 'mdb-angular-organization-chart';
import { MdbDataParserModule } from 'mdb-angular-data-parser';
import { MdbTreeTableModule } from 'mdb-angular-treetable';

import { AppComponent } from './app.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { MainLayoutComponent } from './shell/layouts/main-layout/main-layout.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainNavbarComponent } from './shell/main-navbar/main-navbar.component';
import { HomeLayoutComponent } from './shell/layouts/home-layout/home-layout.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initializeTranslation(http: HttpClient, translate: TranslateService) {
  return () => {
    return http.get('/assets/i18n/en.json').subscribe((translations: any) => {
      translate.setTranslation('en', translations);
      translate.setDefaultLang('en');
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    MainLayoutComponent,
    FourOhFourComponent,
    MainNavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]), // Add routes here or import AppRoutingModule
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  
    MdbAccordionModule,
    MdbAutocompleteModule,
    MdbCarouselModule,
    MdbChartModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDatepickerModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbInfiniteScrollModule,
    MdbLazyLoadingModule,
    //MdbLightboxModule,
    MdbLoadingModule,
    MdbModalModule,
    MdbNotificationModule,
    MdbPopconfirmModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRatingModule,
    MdbRippleModule,
    MdbScrollbarModule,
    MdbScrollspyModule,
    MdbSelectModule,
    MdbSidenavModule,
    MdbSmoothScrollModule,
    MdbStepperModule,
    MdbStickyModule,
    MdbTableModule,
    MdbTabsModule,
    MdbTimepickerModule,
    MdbTooltipModule,
    MdbValidationModule,
    // MdbMultiRangeModule,
    MdbCalendarModule,
    MdbWysiwygModule,
    MdbDragAndDropModule,
    // MdbVectorMapModule,
    MdbFileUploadModule,
    MdbTreeviewModule,
    MdbTransferModule,
    MdbMentionModule,
    // MdbOnboardingModule,
    MdbParallaxModule,
    MdbInputMaskModule,
    MdbCountdownModule,
    MdbMultiItemCarouselModule,
    MdbEcommerceGalleryModule,
    MdbColorPickerModule,
    MdbCaptchaModule,
    MdbOrganizationChartModule,
    MdbDataParserModule,
    MdbTreeTableModule,

    // Configure TranslateModule
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslation,
      deps: [HttpClient, TranslateService],
      multi: true
    }
  ],
  exports: [TranslateModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }