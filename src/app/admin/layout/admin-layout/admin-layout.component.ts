import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  public isCollapsed = false;


  autoCollapse(isCollapsed: boolean) {
    isCollapsed = isCollapsed;
    console.log('Sidebar collapsed:', isCollapsed);

  }
}
