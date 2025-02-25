import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  imports: [],
  template: '<svg:use [attr.href]="href" ></svg:use>',
})
export class SvgIconComponent {
  @Input() icon = '';

  get href(): string {
    return `/assets/svg/${this.icon}.svg#${this.icon}`;
  }
}