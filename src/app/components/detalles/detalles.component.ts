import { Component, OnInit } from '@angular/core';
import {Products} from 'src/app/model/products';
import {ProductosServices} from 'src/app/productos.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  product: Products;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductosServices) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getPctos(id).subscribe(
      product => this.product = product);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
