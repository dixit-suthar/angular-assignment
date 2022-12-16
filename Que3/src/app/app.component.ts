import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Que3';
  phoneNumbers:any = [];
  num = 2;


  userForm!: FormGroup;

   ngOnInit() {
    this.userForm = new FormGroup({
      phoneNumber1: new FormControl('')
    })
  }

  
  onSubmit(form:FormGroup) {
    
    console.log(form.value)
   
  }
  addControl(num:any) {
    this.userForm.addControl('phoneNumber'+this.num, new FormControl(''));
  }
  onAddPhoneNumber(){
    this.phoneNumbers.push(
      {numberId: this.num}
    )
    this.addControl(this.num)
    this.num++;
  }
}
