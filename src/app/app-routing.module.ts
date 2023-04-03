import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './edit-page/edit-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';


const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "product", component: ProductPageComponent
  },
  {
    path: "edit", component: EditPageComponent 
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
