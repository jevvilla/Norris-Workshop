import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeService } from './joke.service';
import { ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ AppComponent ],
      providers:  [ JokeService ]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance
    el = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Chuck Norris Jokes'`, () => {
    expect(component.title).toEqual('Chuck Norris Jokes');
  });

  it('should render title in a h1 tag', () => {
    component.title = "chuck norris jokes";
    fixture.detectChanges();
    expect(el.nativeElement.querySelector('h1').textContent).toContain('Chuck Norris Jokes');
  });
});
