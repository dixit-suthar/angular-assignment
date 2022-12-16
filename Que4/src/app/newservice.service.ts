import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  constructor() {}
  connectedText:string = "";

  setText(value:string){
    this.connectedText = value; 
  }
}
