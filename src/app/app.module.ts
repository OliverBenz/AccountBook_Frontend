import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { LoginComponent } from './login/login.component';
import { StartSiteComponent } from './start-site/start-site.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddAccountComponent,
    IndexComponent,
    HeaderComponent,
    SafeHTMLPipe,
    LoginComponent,
    StartSiteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
