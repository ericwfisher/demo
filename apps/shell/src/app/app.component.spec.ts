import { TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { ToolbarComponent } from '@demo/toolbar';

import { AppComponent } from './app.component';
describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        MockComponents(
          ToolbarComponent
        )
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Brewery DB Demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Brewery DB Demo');
  });
});
