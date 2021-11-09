import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaslaugosComponent } from './paslaugos/paslaugos.component';
import { TestDropdownComponent } from './test-dropdown/test-dropdown.component';
import { DropdownDirective } from './dropdown.directive';
import { ProgressBarDirective } from './progress-bar.directive';
import { RegistracijaComponent } from './registracija/registracija.component';
import { UsedEmailDirective } from './used-email.directive';
import { BureliaiComponent } from './bureliai/bureliai.component';
import { BirthYearDirective } from './birth-year.directive';
import { DiscCodDirective } from './disc-cod.directive';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';

@NgModule({
  declarations: [
    AppComponent,
    PaslaugosComponent,
    TestDropdownComponent,
    DropdownDirective,
    ProgressBarDirective,
    RegistracijaComponent,
    UsedEmailDirective,
    BureliaiComponent,
    BirthYearDirective,
    DiscCodDirective,
    RezervacijaComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
