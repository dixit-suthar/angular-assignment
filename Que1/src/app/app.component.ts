import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';

  public seriesForm:FormGroup; 
  num: number = 0; 
  constructor( private fb: FormBuilder) {
    
    this.seriesForm = this.fb.group({
      num: 0
    });
  }
  setValue() {
    this.num=this.seriesForm.get('num')?.value;
    this.num = this.num++;
    if(this.num > 0){
      if(this.num%2 === 0){
        this.num = this.num*this.num - 1;
      }
      else{
        this.num = this.num*this.num + 1;
      }
    }
    else{
      this.num = 0;
    }
  }
}
