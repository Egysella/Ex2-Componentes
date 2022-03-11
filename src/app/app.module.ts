import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputNomeComponent } from './input-nome/input-nome.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputButtonComponent } from './input-button/input-button.component';



@NgModule({
  declarations: [
    AppComponent,
    InputNomeComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputButtonComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }