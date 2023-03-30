import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit{
  proyectos: Proyectos[] = [];

  constructor (private proyectoS: ProyectosService, private tokenS: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenS.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarProyecto():void{
    this.proyectoS.lista().subscribe(
      data =>{
        this.proyectos = data;
      }
    )
  }

  delete(id?:number){
    if( id != undefined){
      this.proyectoS.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }


}
