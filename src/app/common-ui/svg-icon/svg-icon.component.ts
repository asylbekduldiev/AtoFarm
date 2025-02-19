import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  imports: [],
  template: '<svg:use [attr.href]="href"></svg:use>',
})
export class SvgIconComponent {
  @Input() icon = '';

  get href() {
    return `/public/assets/svg/${this.icon}.svg#${this.icon}`;
  }
}