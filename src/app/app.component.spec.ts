import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeService } from './joke.service';
import { JokeComponent } from './joke/joke.component';
import { ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { CapitalizePipe } from './capitalize.pipe';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;
  let pipeCapitalizer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ AppComponent, JokeComponent ],
      providers: [ JokeService ]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance
    el = fixture.debugElement;
    pipeCapitalizer = new CapitalizePipe();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Chuck Norris Jokes'`, () => {
    expect(component.title).toEqual('Chuck Norris Jokes');
  });

  it('should render title in a h1 tag', () => {
    component.title = "cHuCk noRRis jokEs";
    fixture.detectChanges();
    component.title = pipeCapitalizer.transform(component.title);
    fixture.detectChanges();
    expect(el.nativeElement.querySelector('h1').textContent).toContain('Chuck Norris Jokes');
  });
});
