import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { LoginFormComponentComponent } from './login-form-component/login-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponentComponent,
    EmpInfoComponent,
    LoginFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
