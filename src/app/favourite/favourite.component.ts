import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent {
  constructor(
    private route: Router,
    private http: HttpClient,
    public service: ServiceService
  ) {}
  showMore = false;
  text: any;
  bookes1$: any;
  ngOnInit() {
    this.bookes1$ = this.service.getFav();
  }
  details(id: string) {
    this.route.navigate([`bookdetails/${id}`]);
  }
  edit(id: string) {
    this.route.navigate([`bookdetails/edit/${id}`]);
  }
  deletefav(id: string) {
    this.bookes1$ = this.service.deletefav(id);
  }
}
