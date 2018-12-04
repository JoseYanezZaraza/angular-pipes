import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { AppComponent } from './app.component';
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { SafeDomPipe } from './pipes/safe-dom.pipe';
import { PsswdPipe } from './pipes/psswd.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SafeDomPipe,
    PsswdPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'es'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
