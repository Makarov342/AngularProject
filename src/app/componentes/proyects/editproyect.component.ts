import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SproyectosServiceService } from 'src/app/service/sproyectos-service.service';

@Component({
  selector: 'app-editproyect',
  templateUrl: './editproyect.component.html',
  styleUrls: ['./editproyect.component.css']
})
export class EditproyectComponent implements OnInit {
  proyectos: Proyectos = null;
  constructor(
    private proyectosS: SproyectosServiceService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.detail(id).subscribe(
      data => {
        this.proyectos = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
      )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Proyecto modificado correctamente")
      },err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      })
  }
}