import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class MoviesListService {

	constructor(private http: Http) {}

	get(): Observable<any> {
		return this.http.get("/movies.json").map(res => res.json())
	}

}