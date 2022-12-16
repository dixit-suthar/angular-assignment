import { Component } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component {

  constructor(private service:NewserviceService){}
  text:string = "text";

  newText(){
    console.log(this.text);
    
    this.service.setText(this.text);
  }
}
