import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeComponent } from './joke.component';
import { JokeService } from './../joke.service';
import { HttpModule} from '@angular/http';
import { inject } from "@angular/core/testing";

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ JokeComponent ],
      providers: [ JokeService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should inject service into component',async(inject([JokeService],(jokeService: JokeService)=>{
    fixture.detectChanges();
    jokeService.getJoke().subscribe(response => expect(component.joke).toEqual(response));
  })));
});
