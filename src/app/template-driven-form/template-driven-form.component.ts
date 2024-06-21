import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
     countryList:Country[]=[
      new Country('1','India'),
      new Country('2','AFG'),
      new Country('3','USA'),
     ];
     onSubmit(form:NgForm){
      console.log(form);
     }
}
class Country{
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
