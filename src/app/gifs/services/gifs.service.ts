import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifteService {
  private _tagsHistory:string[] = []
  private apiKey:string = '0YA4rvG29afWaSWIeMLgs8R4kh0ggbRO';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';
  public giflist:Gif[] = []



  get tagsHistory () {
    return [...this._tagsHistory]
  }
 private organizeHistory(tag:string){
  tag = tag.toLocaleLowerCase();

  if (this._tagsHistory.includes(tag)){
    this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag);
  }
  this._tagsHistory.unshift(tag)
  this._tagsHistory = this._tagsHistory.splice(0,10);
  this.savelocalStorage()

 }
 constructor(private http:HttpClient){this.loadlocalStrorage()};


  searchTag(tag:string):void{
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q',tag)

  this.http.get<SearchResponse>( `${this.serviceUrl}/search`,{params:params} )
  .subscribe((resp) => {
    this.giflist = resp.data;
    console.log({gift:this.giflist})

  })



  }
  private savelocalStorage():void{
   localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }



  private loadlocalStrorage():void{
    if(!localStorage.getItem('history')  ){
      return;
    }
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)
    if(this.tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }


}
