import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreweryCardComponent } from './brewery-card.component';

describe('BreweryCardComponent', () => {
  let component: BreweryCardComponent;
  let fixture: ComponentFixture<BreweryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BreweryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
