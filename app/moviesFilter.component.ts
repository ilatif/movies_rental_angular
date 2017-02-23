import { Component } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
	selector: 'movies-filter',
	templateUrl: 'templates/moviesFilter.component.html'
})
export class MoviesFilterComponent {

	constructor(private filterService: FilterService) {}

	filters = ['All', 'Action', 'Drama', 'Sci-Fi', 'Animation'];

	handleChange(e) {
		this.filterService.filter = e.target.value;
		this.filterService.next();
	}

}