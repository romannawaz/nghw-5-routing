import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';

import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { UserlistComponent } from './pages/works/userlist/userlist.component';
import { PhonebookComponent } from './pages/works/phonebook/phonebook.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'works', component: WorksComponent, children: [
      { path: 'cenzor', component: CenzorComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'phonebook', component: PhonebookComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
