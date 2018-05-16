import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor',
      loveIts: 0,
      createdAt: new Date(),
    },

    {
      title: 'Mon deuxième post',
      content: 'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.',
      loveIts: 0,
      createdAt: new Date(),
    },
    {
      title: 'Mon troisième post',
      content: 'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.',
      loveIts: 0,
      createdAt: new Date(),
    }
  ];
}
