import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class GifsModule { }
