import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';

import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { UserlistComponent } from './pages/works/userlist/userlist.component';
import { PhonebookComponent } from './pages/works/phonebook/phonebook.component';
import { SearchPipe } from './pages/works/phonebook/search.pipe';
import { SortPipe } from './pages/works/phonebook/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    UserlistComponent,
    PhonebookComponent,
    PhonebookComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
