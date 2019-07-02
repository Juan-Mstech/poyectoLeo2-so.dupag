import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { TableModule } from 'primeng/components/table/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaComponent } from '../app/components/tabla/tabla.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DetallesComponent } from 'src/app/components/detalles/detalles.component';
import { RouteModule } from 'src/app/components/route/route.module';
import {AddpctoComponent} from 'src/app/components/addpcto/addpcto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SettingsComponent,
    FooterComponent,
    TablaComponent,
    DetallesComponent,
    AddpctoComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule,
    DropdownModule,
    ButtonModule,
    RouteModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

@Directive({})
export class AppModule { }
