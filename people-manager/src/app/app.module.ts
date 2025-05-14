import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
