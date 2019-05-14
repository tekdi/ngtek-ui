import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgtekCardModule } from '../../projects/ngtek-card/src/public-api';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    NgtekCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
