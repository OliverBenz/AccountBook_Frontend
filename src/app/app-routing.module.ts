import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './index/index.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'main', component: MainComponent },
  { path: 'add', component: AddAccountComponent },
  { path: 'login', component: LoginComponent},
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: "index", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
