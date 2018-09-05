import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listProducts:any;
  constructor(private booksService:BooksService) {
    this.listProducts=JSON.parse(localStorage.getItem('productList'));
    this.booksService.subjectBooks.subscribe(//listen to the subject of books
      {
        next: (book:any) => this.removeBook(book)
      }
    );
   }
  ngOnInit() {
  }
  removeBook(book:any)//remove book from cart
  {
    let index=this.listProducts.indexOf(book);
    this.listProducts.splice(index,1);
    localStorage.setItem("productList", JSON.stringify(this.listProducts));
  }
}
