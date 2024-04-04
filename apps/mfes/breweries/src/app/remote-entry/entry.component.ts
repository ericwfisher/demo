import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreweriesEntryComponent } from '@demo/breweries-entry'

@Component({
  standalone: true,
  imports: [
    CommonModule,
    BreweriesEntryComponent,
  ],
  selector: 'app-breweries-entry',
  template: `<lib-breweries-entry></lib-breweries-entry>`,
})
export class RemoteEntryComponent {}
