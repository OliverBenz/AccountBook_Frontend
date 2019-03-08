import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { CookieService } from 'ngx-cookie-service';
import { LoginFieldComponent } from './login/login-field/login-field.component';
import { RegisterFieldComponent } from './login/register-field/register-field.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddAccountComponent,
    IndexComponent,
    HeaderComponent,
    LoginComponent,
    LoginFieldComponent,
    RegisterFieldComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
