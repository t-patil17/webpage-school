import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:'', redirectTo:'home', pathMatch:'full' 
  },
  {
    path:'home',  component:HomeComponent
  },
  {
    path:'header',  component:HeaderComponent
  },
  {
    path:'footer', component:FooterComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
