import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PagesRouting } from './pages.routing';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    PagesRouting
  ]
})
export class PagesModule { }
