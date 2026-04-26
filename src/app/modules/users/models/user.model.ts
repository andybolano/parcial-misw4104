export class Usuario {
  id: number;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: string;
  location: string;
  repoIds: number[];

  constructor(data: Partial<Usuario> = {}) {
    this.id = data.id ?? 0;
    this.username = data.username ?? '';
    this.name = data.name ?? '';
    this.email = data.email ?? '';
    this.avatarUrl = data.avatarUrl ?? '';
    this.role = data.role ?? '';
    this.location = data.location ?? '';
    this.repoIds = data.repoIds ?? [];
  }
}
