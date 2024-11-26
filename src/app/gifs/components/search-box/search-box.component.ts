import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `<h5>Buscar</h5>
  <input type="text" class="form-control" placeholder="buscar gift " (keyup.enter)="serchTag()" #txtTaginput>

  `
})
export class SearchBoxComponent {
  @ViewChild('txtTaginput')
  public tagInput!:ElementRef<HTMLInputElement>;
   constructor () {}


   serchTag() {
    const newTag = this.tagInput.nativeElement.value
    console.log({newTag});


   }
}
