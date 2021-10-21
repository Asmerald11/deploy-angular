import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-paginas.interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor(private http: HttpClient) { 
  console.log ('Servicio de la pagina esta listo');
  this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      console.log(resp);

      //como ya es un objeto de Javascript, puedo acceder a sus propiedades
      console.log(resp.email);
      console.log(resp.nombre);


      //Luego de las pruebas, utilizo la variable resp para guardar la informacion
      this.cargada = true;
      this.info = resp;
      console.log(resp);

    }
    )}
}
