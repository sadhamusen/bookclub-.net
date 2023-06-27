import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss'],
})
export class BookcardComponent {
  constructor(
    private route: Router,
    private http: HttpClient,
    public service: ServiceService
  ) {}
  @Input() book = {
    id: '0',
    title: 'Vikram',
    author: 'sadham',
    category: 'horror',
    PublicationDate: '02/03/2002',
    status: '',
    image: '',
    des: '',
    rating: 0,
  };

  @Output() delete = new EventEmitter<string>();
  delBook(id: string) {
    this.delete.emit(id);
  }
  showMore = false;
  text: any;

  details(id: string) {
    this.route.navigate([`bookdetails/${id}`]);
  }
  edit(id: string) {
    this.route.navigate([`bookdetails/edit/${id}`]);
  }
  fav: boolean = false;
  addToFav(val: any) {
    // alert('Added to Fav');
    this.fav = true;
    this.service.addToFav(val);
    console.log(val);
    this.route.navigate([`favourite`]);
  }
}
