import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bookcard1',
  templateUrl: './bookcard1.component.html',
  styleUrls: ['./bookcard1.component.scss'],
})
export class Bookcard1Component {
  constructor(
    private route: Router,
    private http: HttpClient,
    public service: ServiceService
  ) {}
  @Input() book1 = {
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

  @Output() delfav = new EventEmitter<string>();
  delfav1(id: string) {
    this.delfav.emit(id);
  }

  showMore = false;
  text: any;

  details(id: string) {
    this.route.navigate([`bookdetails/${id}`]);
  }
  edit(id: string) {
    this.route.navigate([`bookdetails/edit/${id}`]);
  }
}
