import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { SafeHTMLPipe } from './safe-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddAccountComponent,
    IndexComponent,
    HeaderComponent,
    SafeHTMLPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
