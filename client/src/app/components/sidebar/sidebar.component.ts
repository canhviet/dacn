import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    standalone: false,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
    constructor(){}

    isDropdownOpen = false;

    isDropDownAIOpen = false;

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    toggleDropdownAI() {
        this.isDropDownAIOpen = !this.isDropDownAIOpen;
    }
}
