import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ClicksService } from './clicks.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClicksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
