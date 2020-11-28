import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common-Module/material.module';
import { TapleComponent } from './taple/taple.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { PersdetComponent } from './persdet/persdet.component';
import { MyLibModule } from 'my-lib';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    TapleComponent,
    DialogBoxComponent,
    PersdetComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MyLibModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
