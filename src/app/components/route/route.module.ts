import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TablaComponent } from 'src/app/components/tabla/tabla.component';
import { DetallesComponent } from 'src/app/components/detalles/detalles.component';
import { AddpctoComponent } from 'src/app/components/addpcto/addpcto.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'detalles', component: DetallesComponent },
  { path: 'addpcto', component: AddpctoComponent },
  { path: '', redirectTo: '/tabla', pathMatch: 'full' },
  { path: '**', redirectTo: '/tabla' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class RouteModule { }
