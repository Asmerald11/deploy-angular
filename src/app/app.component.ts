import { Component } from '@angular/core';
import { InfoPaginaService } from './servicios/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaAngular';
  constructor (public infoPaginaService: InfoPaginaService ) {

  }
}
