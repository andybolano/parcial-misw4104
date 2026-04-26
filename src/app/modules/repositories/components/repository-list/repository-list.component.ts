import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Repositorio } from '../../models/repository.model';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-repository-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, RouterLink],
  templateUrl: './repository-list.component.html',
  styleUrl: './repository-list.component.css'
})
export class RepositoryListComponent {
  private repositoryService = inject(RepositoryService);

  repositories$: Observable<Repositorio[]> = this.repositoryService.getRepositories();

  getLanguageIcon(lang: string): string {
    const icons: Record<string, string> = {
      TypeScript: 'bi-filetype-tsx',
      JavaScript: 'bi-filetype-js',
      Java: 'bi-cup-hot-fill',
      Python: 'bi-filetype-py',
      Shell: 'bi-terminal-fill',
      HTML: 'bi-filetype-html',
      CSS: 'bi-filetype-css',
      Kotlin: 'bi-phone-fill',
    };
    return icons[lang] ?? 'bi-code-slash';
  }
}
