import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServerComponent } from './server/server.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
