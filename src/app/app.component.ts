import { Component, OnInit } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Chuck Norris Jokes';

  constructor(private jokeService: JokeService){}

  ngOnInit(): void {
    this.getJoke()
  }

  getJoke() {
    // this.jokeService.getJoke().subscribe(response => console.log(response));
  } 
}
