import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Repositorio } from '../../models/repository.model';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-repository-detail',
  standalone: true,
  imports: [CommonModule, AsyncPipe, RouterLink],
  templateUrl: './repository-detail.component.html',
  styleUrl: './repository-detail.component.css'
})
export class RepositoryDetailComponent {
  private route = inject(ActivatedRoute);
  private repositoryService = inject(RepositoryService);

  private id = Number(this.route.snapshot.paramMap.get('id'));
  repo$: Observable<Repositorio | undefined> = this.repositoryService.getRepositoryById(this.id);

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

  formatDate(dateStr: string): string {
    if (!dateStr) return 'Sin fecha';
    return new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })
      .format(new Date(dateStr));
  }
}
