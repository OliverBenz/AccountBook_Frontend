import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './index/index.component';
import { AddAccountComponent } from './add-account/add-account.component'

const routes: Routes = [
  // TODO: Better fix for main page than path: ''
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'main', component: MainComponent },
  { path: 'add', component: AddAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
