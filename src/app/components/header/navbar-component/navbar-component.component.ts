import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { CdkMenuModule } from '@angular/cdk/menu'; // Importa CdkMenuModule

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [
    RouterModule, // Usa RouterModule para funcionalidades de enrutamiento
    CdkMenuModule, // Proporciona las directivas del CDK menu
  ],
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss'] // Corrección: styleUrls
})
export class NavbarComponentComponent {

}
