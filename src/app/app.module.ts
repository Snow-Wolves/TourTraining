import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Helpers
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

// FontAwesome
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faSpinner as faSpinner } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons'; // Regular
// import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid
// import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand

// Componentes
import { AppComponent } from './app.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSpinner);
  }
}
