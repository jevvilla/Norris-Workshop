import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { JokeService } from './joke.service';

describe('JokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeService],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([JokeService], (service: JokeService) => {
    expect(service).toBeTruthy();
    service.getJoke().subscribe(response => console.log(response));
  }));
});
