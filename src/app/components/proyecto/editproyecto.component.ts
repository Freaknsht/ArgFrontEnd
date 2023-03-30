import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit{
  proyecto: Proyectos = null;

  constructor(private proyectoS: ProyectosService, private actiRouter: ActivatedRoute,private router: Router, public imagenService: ImageService) {

  }

  ngOnInit(): void {
    const id = this.actiRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
        alert("Error al modifcar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id= this.actiRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      data=>{
        this.router.navigate(['']);

      }, err =>{
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.actiRouter.snapshot.params['id'];
    const name = "FProyecto_" + id;
    this.imagenService.uploadImage($event, name)
  }
}
