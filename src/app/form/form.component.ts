import { Component,EventEmitter,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() carAdded:EventEmitter<string[]>= new EventEmitter
  cars:string[] = [];
  carsName ="";
  addCar(){
    this.cars.push(this.carsName);
    this.carsName="";
    this.carAdded.emit(this.cars);
  }
}
