import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs/Rx';

@Injectable()
export class FilterService {
	filter = "All";

	private events = new Subject();

	subscribe(next) {
		return this.events.subscribe(next);
	}

	next() {
		this.events.next();
	}

}