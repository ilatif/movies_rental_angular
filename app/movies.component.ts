import { Component, OnInit } from '@angular/core';
import { MoviesListService } from './moviesList.service';
import { FilterService } from './filter.service';

@Component({
	selector: 'movies',
	templateUrl: 'templates/movies.component.html'
})
export class MoviesComponent implements OnInit {

	movies = [];
	filteredMovies = [];

	constructor(private service: MoviesListService, private filterService: FilterService) {}

	ngOnInit() {

		this.filterService.subscribe(this.filterMovies.bind(this))

		this.service.get().subscribe(movies => {
			this.movies = movies;
			this.filterMovies();
		});
	}

	filterMovies() {
		if (this.filterService.filter == "All") {
			this.filteredMovies = this.movies;
		} else {
			let lowerFilter = this.filterService.filter.toLowerCase();
			this.filteredMovies = this.movies.filter(movie => movie.type == lowerFilter);
		}
	}

}