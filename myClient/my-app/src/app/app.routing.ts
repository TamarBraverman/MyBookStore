import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AccountComponent } from './components/account/account.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import{AuthGuardCart,AuthGuardlogin}from './shared/auth.guard'
const appRoutes: Routes = [

    { path: 'BookStore/header', component: HeaderComponent },
    { path: 'BookStore/main', component: MainComponent },
    {
        path: 'BookStore/account', component: AccountComponent, children: [
            {path:'login',component:LoginComponent,canActivate: [AuthGuardlogin]},
            {path:'register',component:RegisterComponent,canActivate: [AuthGuardlogin]}
        ]
    },
    { path: 'BookStore/products', component:ProductsComponent, children:[
        {path:'productPreview', component:ProductPreviewComponent}
    ] },
    { path: 'BookStore/cart', component: CartComponent  ,canActivate: [AuthGuardCart] ,children:[
        {path:'cartProduct' ,component:CartProductComponent}
    ]},
    { path: 'BookStore/productDetails', component: ProductDetailsComponent },
    { path: 'BookStore/home', component: HomeComponent },
    { path: 'BookStore', component: HomeComponent },
    { path: '**', component: HomeComponent },
    { path: 'BookStore/footer', component: FooterComponent }
];

export const routing = RouterModule.forRoot(appRoutes);