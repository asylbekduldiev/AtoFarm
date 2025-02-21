import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'svg-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<svg class="svg-icon" width="16" height="16" style="fill: red;"><use [attr.xlink:href]="href"></use></svg>`,
  encapsulation: ViewEncapsulation.None
})
export class SvgIconComponent {
  @Input() icon = '';

  get href(): string {
    return `assets/svg/sprite.svg#${this.icon}`;
  }
}