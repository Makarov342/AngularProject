import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaboutComponent } from './componentes/about/editabout.component';
import { NewaboutComponent } from './componentes/about/newabout.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { EditeducacionComponent } from './componentes/experience/editeducacion.component';
import { EditexperienciaComponent } from './componentes/experience/editexperiencia.component';
import { NewEducacionComponent } from './componentes/experience/new-educacion.component';
import { NewExperienciaComponent } from './componentes/experience/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditproyectComponent } from './componentes/proyects/editproyect.component';
import { NewproyectComponent } from './componentes/proyects/newproyect.component';
import { EditskillComponent } from './componentes/skills/editskill.component';
import { NewskillComponent } from './componentes/skills/newskill.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'newexp',component:NewExperienciaComponent},
  {path:'newedu', component:NewEducacionComponent},
  {path:'edit/:id',component:EditeducacionComponent},
  {path: 'editexp/:id',component:EditexperienciaComponent},
  {path: 'nuevaskill', component:NewskillComponent},
  {path:'editskill/:id', component:EditskillComponent},
  {path:'nuevopro',component:NewproyectComponent},
  {path:'editpro/:id',component:EditproyectComponent},
  {path: 'nuevoabout', component:NewaboutComponent} ,
  {path: 'editabout/:id', component:EditaboutComponent},
  {path: 'contact', component:ContactComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
