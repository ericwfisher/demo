import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';

import { Brewery } from '@demo/core';

@Component({
  selector: 'lib-brewery-card',
  standalone: true,
  templateUrl: './brewery-card.component.html',
  styleUrl: './brewery-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CardModule,
  ],
})
export class BreweryCardComponent {
  @Input() brewery: Brewery | null = null;
}
