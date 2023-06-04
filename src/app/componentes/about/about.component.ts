import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { persona } from 'src/app/model/persona.model';
import { AboutserviceService } from 'src/app/service/aboutservice.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: About[] = [];
  images: string[];
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService, private aboutS: AboutserviceService, private tokenService: TokenService){}
  
  isLogged = false;
  ngOnInit(){
    this.personaService.getPersona().subscribe(data =>{this.persona = data});
    this.cargarAbout();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarAbout(): void {
    this.aboutS.lista().subscribe(
      data => {
        this.about = data;
      }
    )
  }
  borrar(id?:number){
    if(id !== undefined){
      this.aboutS.delete(id).subscribe(
        data => {
          this.cargarAbout();
        },error => {
          alert("No se pudo eliminar acerca de mí")
        }
      )
    }
  }
 
}
