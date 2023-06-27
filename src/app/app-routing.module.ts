import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { EditComponent } from './edit/edit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'form', component: FormComponent },
  { path: 'bookdetails', component: BookdetailsComponent },
  { path: 'bookdetails/:id', component: BookdetailsComponent },
  { path: 'bookdetails/edit/:id', component: EditComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
