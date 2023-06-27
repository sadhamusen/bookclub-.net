import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  urlregex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  bookForm = this.fb.group({
    author: ['', Validators.required],
    title: ['', Validators.required],
    PublicationDate: ['', [Validators.required]],
    category: ['', [Validators.required]],
    status: ['', Validators.required],
    image: ['', [Validators.required, Validators.pattern(this.urlregex)]],
    // fav: ['', Validators.required],
    rating: ['', Validators.required],
  });
  @Output() add = new EventEmitter<FormGroup>();
  movie: any;

  constructor(
    private fb: FormBuilder,
    public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}
  frameworks: any;
  countriesList: any[] = ['currently reading', 'Have Read', 'Plan to Read'];
  Favourite: any[] = ['true', 'false'];

  ngOnInit() {
    // this.route.paramMap.subscribe((route) => {
    //   const movieid = route.get('id');
    //   this.movie = movieid;
    //   this.service.getMoviesByid(movieid as string).subscribe((data: any) => {
    //     console.log(data.name);
    //     this.movieForm.patchValue(data);
    //     ``;
    //   });
    // });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.service.addMovie(this.bookForm).subscribe(() => {
        this.router.navigate(['/home']);
      });
      console.log(this.bookForm.value);
    }
  }
  get title() {
    return this.bookForm.get('title');
  }
  get author() {
    return this.bookForm.get('author');
  }
  get PublicationDate() {
    return this.bookForm.get('PublicationDate');
  }
  get category() {
    return this.bookForm.get('category');
  }
  get image() {
    return this.bookForm.get('image');
  }
  get status() {
    return this.bookForm.get('status');
  }
  // get fav() {
  //   return this.bookForm.get('fav');
  // }
  get rating() {
    return this.bookForm.get('rating');
  }
}
