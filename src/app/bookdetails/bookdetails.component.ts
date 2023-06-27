import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss'],
})
export class BookdetailsComponent {
  book: any;
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const movieid = route.get('id');
      this.service.getMoviesByid(movieid as string).subscribe((data: any) => {
        this.book = data;
      });
    });
  }
}
