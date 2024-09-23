import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component'; // Ensure this path is correct


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected this line
})
export class AppComponent {
  title = 'Terezya';
}
