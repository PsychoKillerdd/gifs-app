import { Component } from '@angular/core';
import { GifteService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  private _tagsHistory: any;
  constructor (private gifsServices:GifteService ) {}
  get tagsHistory(){
  return this.gifsServices.tagsHistory

  }
}
