import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { TapleComponent } from './taple/taple.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { PersdetComponent } from './persdet/persdet.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'personal', component: PersdetComponent },
  { path: 'table', component: TapleComponent },
  { path: 'dialogbox', component: DialogBoxComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }