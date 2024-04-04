import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'lib-brewery-search',
  standalone: true,
  templateUrl: './brewery-search.component.html',
  styleUrl: './brewery-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule
  ],
})
export class BrewerySearchComponent {}
