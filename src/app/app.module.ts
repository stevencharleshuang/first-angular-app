import { BrowserModule } from '@angular/platform-browser';
// import the NgModule app decorator
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Testcomponent1Component } from './testcomponent1/testcomponent1.component';
import { Testcomponent2Component } from './testcomponent2/testcomponent2.component';

@NgModule({
  // Components to be aware of at bundling
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Testcomponent1Component,
    Testcomponent2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
