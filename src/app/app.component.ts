import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GifsModule } from './gifs/gifs.module';

import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GifsModule,
    SharedModule,
    SidebarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifs-app';
}
