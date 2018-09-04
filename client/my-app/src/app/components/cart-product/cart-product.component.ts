import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  @Input() products: any;
  listProducts: any;
  constructor(private booksService:BooksService) {
  }

  ngOnInit() {
  }
  remove() {
    this.booksService.subjectBooks.next(this.products);
  }
}
