import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  category = [
    { id: 1, title: 'Computer' },
    { id: 2, title: 'Gadgets' },
    { id: 3, title: 'Keyboards' },
    { id: 4, title: 'Phones' },
  ];
}
