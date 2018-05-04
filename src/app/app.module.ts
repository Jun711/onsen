import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { ComLibraryComponent } from './com-library/com-library.component';

export const appRoutes: Routes = [
  {
    path: 'doc',
    component: ComLibraryComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ComLibraryComponent,
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
