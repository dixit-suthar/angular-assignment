import { Component } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  constructor(private newService: NewserviceService){
    console.log(this.text);
  }
  text:string = this.newService.connectedText;


}
