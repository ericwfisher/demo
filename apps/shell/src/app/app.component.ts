import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '@demo/dashboard';
import { ToolbarComponent } from '@demo/toolbar';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterModule,
    DashboardComponent,
    ToolbarComponent,
  ],
})
export class AppComponent {
  title = 'Brewery DB Demo';
}
