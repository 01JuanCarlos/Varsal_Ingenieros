import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header-other',
  templateUrl: './header-other.component.html',
  styleUrl: './header-other.component.css'
})
export class HeaderOtherComponent {
  @Input() title: string = '';
}
