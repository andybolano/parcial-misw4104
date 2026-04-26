import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Repositorio } from '../../models/repository.model';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-repository-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './repository-list.component.html',
  styleUrl: './repository-list.component.css'
})
export class RepositoryListComponent implements OnInit {
  repositories: Repositorio[] = [];
  isLoading = true;

  constructor(private repositoryService: RepositoryService) {}

  ngOnInit(): void {
    this.repositoryService.getRepositories().subscribe(repos => {
      this.repositories = repos;
      this.isLoading = false;
    });
  }

  get languageIcon(): (lang: string) => string {
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
    return (lang: string) => icons[lang] ?? 'bi-code-slash';
  }
}
