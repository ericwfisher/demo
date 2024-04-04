import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { BreweriesEntryComponent } from './breweries-entry.component';
import { BreweryCardComponent } from '../brewery-card/brewery-card.component';

describe('BreweriesEntryComponent', () => {
  let component: BreweriesEntryComponent;
  let fixture: ComponentFixture<BreweriesEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BreweriesEntryComponent,
        MockComponents(
          BreweryCardComponent
        )
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BreweriesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
