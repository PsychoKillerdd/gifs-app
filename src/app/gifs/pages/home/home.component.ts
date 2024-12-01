import { Component } from '@angular/core';
import { GifteService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gift-home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private gifsService:GifteService){}
get (){
  // todo
}


  get gifs():Gif[] {
    return this.gifsService.giflist
    console.log('a soy un wn flojo dios mio')
  }
}
