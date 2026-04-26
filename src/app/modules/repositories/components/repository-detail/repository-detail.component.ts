import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Repositorio } from '../../models/repository.model';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-repository-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './repository-detail.component.html',
  styleUrl: './repository-detail.component.css'
})
export class RepositoryDetailComponent implements OnInit {
  repo: Repositorio | null = null;
  isLoading = true;
  hasError = false;

  constructor(
    private route: ActivatedRoute,
    private repositoryService: RepositoryService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.hasError = true;
      this.isLoading = false;
      return;
    }

    this.repositoryService.getRepositoryById(id).subscribe({
      next: repo => {
        this.repo = repo ?? null;
        this.hasError = !repo;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  get languageIcon(): string {
    const icons: Record<string, string> = {
      TypeScript: 'bi-filetype-tsx',
      JavaScript: 'bi-filetype-js',
      Java: 'bi-cup-hot-fill',
      Python: 'bi-filetype-py',
      Shell: 'bi-terminal-fill',
      HTML: 'bi-filetype-html',
      CSS: 'bi-filetype-css',
      Kotlin: 'bi-phone-fill',
      Swift: 'bi-apple',
    };
    return icons[this.repo?.language ?? ''] ?? 'bi-code-slash';
  }

  get formattedDate(): string {
    if (!this.repo?.createdAt) return 'Sin fecha';
    return new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
      .format(new Date(this.repo.createdAt));
  }
}
