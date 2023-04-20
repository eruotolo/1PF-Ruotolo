import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from "./shared/toolbar/toolbar.module";
import { SidebarModule } from "./shared/sidebar/sidebar.module";
import { PageWrapperModule } from "./pages/page-wrapper/page-wrapper.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule,
    SidebarModule,
    PageWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
