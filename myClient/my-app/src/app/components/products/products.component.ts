import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listFilter: any = [];
  text: string;
  constructor(private booksService: BooksService) {
  this.getListProducts("a");
  }
  ngOnInit() {
  }
  getListProducts(event) {//sent to service to get th books
    this.booksService.getProductsListfilter(event).subscribe(data => {
      this.listFilter = data['items'];
    });
  }
}
