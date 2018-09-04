
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { BooksService } from '../../shared/services/books.service';
import { User } from '../../shared/models/user';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  book: any;
  user:User;
  constructor(private activeRoute: ActivatedRoute, private router: Router, private booksService: BooksService) {
    this.user=JSON.parse(localStorage.getItem('user')) ;
  }

  ngOnInit() {
    this.activeRoute.params.forEach(myBook => {
      this.book = myBook;
    });
  }
  getListCart() {
    return this.booksService.getListCart();
  }
  AddToCart() {//get all the cart of the user
    this.booksService.AddToCart(this.book);
  }
  backToProduct() {
    this.router.navigate(["/products"]);
  }
}
