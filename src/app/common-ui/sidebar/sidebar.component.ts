import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { NgForOf,NgFor, CommonModule } from '@angular/common';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIconComponent, NgFor, CommonModule, SubscriberCardComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = [
    { label: 'Моя страница', icon: 'home', link: '' },
    { label: 'Чаты', icon: 'chat', link: 'chat' },
    { label: 'Поиск', icon: 'search', link: 'search' },
  ];

}