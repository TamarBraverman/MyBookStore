import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { routing }        from './app.routing';
import { AccountComponent } from './components/account/account.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/account/components/login/login.component';
import { RegisterComponent } from './components/account/components/register/register.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{UsersService}from'./shared/services/users.service';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import{BooksService}from'./shared/services/books.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AccountComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProductPreviewComponent,
    CartProductComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UsersService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
