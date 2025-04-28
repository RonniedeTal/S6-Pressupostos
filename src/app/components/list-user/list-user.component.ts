import { Component, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-user',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent {
  userService = inject(UserService);
  users = this.userService.getUser();

  sortCriteria = signal<'date' | 'price' | 'alphabetical'>('date');
  searchTerm = signal('');

  filteredUsers = computed(() => {
    const search = this.searchTerm().toLowerCase();
    let filtered = this.users();

    if (search) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(search) ||
          user.email.toLowerCase().includes(search)
      );
    }

    switch (this.sortCriteria()) {
      case 'price':
        return filtered.sort((a, b) => b.budget - a.budget);
      case 'alphabetical':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'date':
      default:
        return filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  });

  changeSortCriteria(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    this.sortCriteria.set(value as 'date' | 'price' | 'alphabetical');
  }
  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.searchTerm.set(target.value);
    }
  }
}
