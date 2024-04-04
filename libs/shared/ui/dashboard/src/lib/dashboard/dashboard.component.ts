import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';

import { BreweryApiService, CoreModule } from '@demo/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CoreModule,
    CardModule,
  ],
})
export class DashboardComponent {

  allMeta$ = this.apiSvc.getMeta();
  micros$ = this.apiSvc.getMetaByType('micro');
  brewpubs$ = this.apiSvc.getMetaByType('brewpub');
  large$ = this.apiSvc.getMetaByType('large');
  closed$ = this.apiSvc.getMetaByType('closed');
  usa$ = this.apiSvc.getMetaByCountry('United_States');

  constructor(
    private apiSvc: BreweryApiService,
    private router: Router,
  ) {}

  onCardClick(paths: string[] = []) {
    this.router.navigate(['/breweries', ...paths]);
  }
}
