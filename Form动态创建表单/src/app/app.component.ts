import { Component } from '@angular/core';

interface FormItemOption {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  options?: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: FormItemOption[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name'
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option'
    },
    {
      type: 'button',
      label: 'Submit',
      name: 'submit'
    }
  ];
  formSubmitted(value: any) {
    console.log(value);
  }
}
