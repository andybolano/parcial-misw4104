export class Repositorio {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  createdAt: string;
  ownerId: number;

  constructor(data: Partial<Repositorio> = {}) {
    this.id = data.id ?? 0;
    this.name = data.name ?? '';
    this.description = data.description ?? '';
    this.language = data.language ?? '';
    this.stars = data.stars ?? 0;
    this.createdAt = data.createdAt ?? '';
    this.ownerId = data.ownerId ?? 0;
  }
}
