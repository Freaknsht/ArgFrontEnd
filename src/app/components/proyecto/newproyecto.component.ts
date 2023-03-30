import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit{
  nombreP:string;
  descripcionP:string;
  img:string;
  proyecto: Proyectos;

  constructor(private proyectoS: ProyectosService, private router: Router, public imagenService: ImageService, private activateRouter: ActivatedRoute) {}

  ngOnInit(): void {
    //const id = this.activateRouter.snapshot.params['id'];


  }

  onCreate():void{
    const id =  this.activateRouter.snapshot.params['id'];
    this.proyecto.img = this.imagenService.url
    const proyecto = new Proyectos(this.nombreP, this.descripcionP, this.img);
    this.proyectoS.save(proyecto).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al agregar poryecto");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activateRouter.snapshot.params['id'];
    const name = "FProyecto_" + id;
    this.imagenService.uploadImage($event, name)
  }
}
