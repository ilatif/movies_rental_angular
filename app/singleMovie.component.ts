import { Component, Input } from '@angular/core';

@Component({
	selector: '[single-movie]',
	templateUrl: 'templates/singleMovie.component.html'
})
export class SingleMovieComponent {
	@Input() movie;
}