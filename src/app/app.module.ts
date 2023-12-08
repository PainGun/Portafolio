import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/header/navbar-component/navbar-component.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatCardModule } from '@angular/material/card'; // Solo importa el módulo

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent // Asegúrate de declarar el NavbarComponentComponent aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkMenuModule,
    MatCardModule // Importa solo el módulo de Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
