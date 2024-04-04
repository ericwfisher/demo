import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'lib-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ToolbarModule,
  ],
})
export class ToolbarComponent implements OnInit, OnDestroy {

  private resizeObs: ResizeObserver | null = null;

  constructor(
    private eRef: ElementRef<HTMLElement>,
  ) {}

  ngOnInit() {
    this.resizeObs = new ResizeObserver(entries => {
      const entry = entries.pop();
      document.documentElement.style.setProperty('--lib-toolbar-height', `${entry?.contentRect.height}`)
    });
    this.resizeObs.observe(this.eRef.nativeElement);
  }

  ngOnDestroy(): void {
      this.resizeObs?.disconnect();
  }
}
