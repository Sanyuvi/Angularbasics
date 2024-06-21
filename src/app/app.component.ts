import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CounterApp';
}
