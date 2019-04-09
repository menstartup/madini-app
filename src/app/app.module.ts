import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MadiniComponet} from '.madini.component';
@NgModule({
  declarations: [
    AppComponent,
    MadiniComponet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MadiniComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
