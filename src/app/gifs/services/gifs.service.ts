import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifteService {
  private _tagsHistory:string[] = []



  get tagsHistory () {
    return [...this._tagsHistory]
  }
 private organizeHistory(tag:string){
  tag = tag.toLocaleLowerCase();

  if (this._tagsHistory.includes(tag)){
    this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag)
  }
  this._tagsHistory.unshift(tag)
  this._tagsHistory = this._tagsHistory.splice(0,10);
  console.log(this.tagsHistory)

 }
 constructor(private http:HttpClient){};


  searchTag(tag:string):void{
    if (tag.length === 0) return;
    this.organizeHistory(tag);


    // const params = new HttpParams()
    // .set('api_key',this.apiKey)
    // .set('limit','10')
    // .set('q',tag);

  //   this.http.get(`${this.serviceUrl}/search`,{params}).subscribe(resp =>{
  //     console.log(resp);
  //   } );
  // }
  this.http.get('https//api.giphy.com/v1/gifs/search?api_key=0YA4rvG29afWaSWIeMLgs8R4kh0ggbRO=valorant&limit=10')
  .subscribe(resp => {
    console.log(resp)
  })


  // private apiKey:string = '0YA4rvG29afWaSWIeMLgs8R4kh0ggbRO';
  // private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  }
}
