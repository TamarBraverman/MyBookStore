import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  subjectBooks = new Subject();
  constructor(private httpClient: HttpClient) { }
  getProductsListfilter(type) {//getting the filter list of books
    return this.httpClient.get(`https://www.googleapis.com/books/v1/volumes?q=${type}&maxResults=40&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`);
  }
  getListCart() {
    let list = localStorage.getItem("productList"); 
    return (list) ? JSON.parse(list) : [];
  }
  AddToCart(book) {//add the product to the cart of user
    let currentList = this.getListCart();
    currentList.push(book);
    localStorage.setItem("productList", JSON.stringify(currentList));
  }

}
