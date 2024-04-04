import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { CoreModule, Brewery, BreweryApiService } from '@demo/core';

import { BreweryCardComponent } from '../brewery-card/brewery-card.component';

@Component({
  selector: 'lib-breweries-entry',
  standalone: true,
  templateUrl: './breweries-entry.component.html',
  styleUrl: './breweries-entry.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CoreModule,
    BreweryCardComponent
  ],
})
export class BreweriesEntryComponent implements OnInit {

  breweries$: Observable<Brewery[]> | null = null;

  constructor(
    private router: Router,
    private apiSvc: BreweryApiService,
  ) { }

  ngOnInit() {
    const route = this.router.url.split('/').pop();

    switch (route) {
      case 'micro':
      case 'brewpub':
      case 'large':
      case 'large':
        this.breweries$ = this.apiSvc.getByType(route);
        break;
      case 'us':
        this.breweries$ = this.apiSvc.getByCountry('United_States');
        break;
      default:
        this.breweries$ = this.apiSvc.get();
        break;

    }
  }
}
