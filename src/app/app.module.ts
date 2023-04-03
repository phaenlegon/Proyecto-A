import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { FormEditComponent } from './form-edit/form-edit.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductPageComponent,
    EditPageComponent,
    ProductsComponent,
    FilterProductsPipe,
    FormEditComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
