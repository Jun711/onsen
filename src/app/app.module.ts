import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { ComDocumentComponent } from './com-document/com-document.component';

export const appRoutes: Routes = [
  {
    path: 'doc',
    component: ComDocumentComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ComDocumentComponent,
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
