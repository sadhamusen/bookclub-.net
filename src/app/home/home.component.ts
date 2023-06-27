import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  bookes: any = 0;
  filterBy: any;
  users$: any;

  constructor(private http: HttpClient, public service: ServiceService) {}

  bookes$: any;
  ngOnInit() {
    // this.http.get('https://648a951717f1536d65e94e9e.mockapi.io/movies').subscribe((val:any)=>{

    // this.movies=val;

    //   console.log(val);

    // })
    this.users$ = this.service.getMovies();
    this.bookes$ = this.service.getMovies();
  }

  filter(event: any) {
    this.bookes$ = this.service.filtersearch(event.target.value);
    this.bookes$ = this.users$.pipe(
      // the stream is of a single item that is of type array
      // map(user => user.name) would not work because it is not // a stream of items inside the array
      map((users: any[]) => {
        // inside the map we use the native Array.prototype.filter() method to filter down the results by name
        this.bookes = users.filter(
          (user: any) =>
            user.title.toLowerCase().indexOf(event.target.value.toLowerCase()) >
            -1
        );
        return this.bookes;
      })
    );
    // this.bookes$ = this.service.filtersearch(event.target.value);
  }
  // trackBy(index: number, mv:any) {
  //   return mv ? mv.id : undefined;
  // }
  deleteMovie(id: any) {
    this.bookes$ = this.service.deleteMovie(id);
  }
  //sadham
}
