import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserDetailComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: Usuario[] = [];
  selectedUser: Usuario | null = null;
  isLoading = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.isLoading = false;
    });
  }

  selectUser(user: Usuario): void {
    this.selectedUser = this.selectedUser?.id === user.id ? null : user;
  }

  isSelected(user: Usuario): boolean {
    return this.selectedUser?.id === user.id;
  }
}
