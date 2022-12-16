import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  compElements = [];
  display:any;
  num = 0;
  onAddComponentX() {
    this.compElements.push({'textx':[]});
  }

  onAddComponentY(id:any) {
    this.compElements[id].push({
      subarrayitem: "subarrayitem "+id
    });

  }
  show(){
    // for(let i = 0 ; i <= this.compElements.length; i++){
    //   let str = this.compElements[i];
    //   for(let j=0; j <= this.compElements[i].length; j++){
    //     str += this.compElements[j]
    //   }
    //   this.display= str;
    // }
    // console.log(this.display);
  }
}
