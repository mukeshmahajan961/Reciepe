import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isCollapsed: boolean = false;
  @Output() isCollapsedChange = new EventEmitter<boolean>();
  activeItem = 'Dashboard';
  constructor(public route: ActivatedRoute, private router: Router) { }

  menuItems = [
    { icon: 'bi-house', label: 'Dashboard' },
    { icon: 'bi-people', label: 'Users' },
    { icon: 'bi-journal', label: 'Recipes' },
    { icon: 'bi-chat-left-text', label: 'Reviews' },
    { icon: 'bi-gear', label: 'Settings' }
  ];

  ngOnInit(): void {
    this.autoCollapse(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.autoCollapse(event.target.innerWidth);
  }

  autoCollapse(width: number) {
    this.isCollapsed = width < 768;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  setActive(item: string) {
    this.activeItem = item;
    this.router.navigate([item.toLowerCase()], { relativeTo: this.route });
  }
}
