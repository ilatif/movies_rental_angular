import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MoviesFilterComponent } from './moviesFilter.component';
import { MoviesComponent } from './movies.component';
import { SingleMovieComponent } from './singleMovie.component';
import { MoviesListService } from './moviesList.service';
import { FilterService } from './filter.service';
import { CapitalizeWordPipe } from './capitalizeWord.pipe';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MoviesFilterComponent, MoviesComponent, SingleMovieComponent, CapitalizeWordPipe ],
  providers:    [ MoviesListService, FilterService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
