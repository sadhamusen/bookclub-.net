import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BookcardComponent } from './bookcard/bookcard.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { EditComponent } from './edit/edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StarRatingModule } from 'angular-star-rating';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FavouriteComponent } from './favourite/favourite.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Bookcard1Component } from './bookcard1/bookcard1.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    BookcardComponent,
    BookdetailsComponent,
    EditComponent,
    NotfoundComponent,
    FavouriteComponent,
    Bookcard1Component,
  ],
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    StarRatingModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
