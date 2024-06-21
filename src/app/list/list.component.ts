import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  standalone: true, 
  imports: [FormComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  cars:String[]=[];
  carDataUpdated(carsData:string[]){
    this.cars = carsData

  }
}
