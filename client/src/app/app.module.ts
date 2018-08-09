import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './twitter/twitter.module#TwitterModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
