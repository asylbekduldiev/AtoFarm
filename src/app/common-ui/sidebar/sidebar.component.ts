import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems =[
    {
      label: 'Моя страница',
      icon: 'home',
      route: '/profile'
    },
    {
      label: 'Чаты',
      icon: 'home',
      route: '/profile'
    },
    {
      label: 'Поиск',
      icon: 'home',
      route: '/profile'
    }
  ]
}
