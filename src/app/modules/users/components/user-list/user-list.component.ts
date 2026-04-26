import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, UserDetailComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  private userService = inject(UserService);

  users$: Observable<Usuario[]> = this.userService.getUsers();
  selectedUser: Usuario | null = null;

  selectUser(user: Usuario): void {
    this.selectedUser = this.selectedUser?.id === user.id ? null : user;
  }

  isSelected(user: Usuario): boolean {
    return this.selectedUser?.id === user.id;
  }
}
