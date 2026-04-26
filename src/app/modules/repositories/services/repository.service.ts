import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Repositorio } from '../models/repository.model';

@Injectable({ providedIn: 'root' })
export class RepositoryService {
  private readonly url = 'https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/repositories.json';

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<Repositorio[]> {
    return this.http.get<Repositorio[]>(this.url).pipe(
      map(data => data.map(r => new Repositorio(r)))
    );
  }

  getRepositoryById(id: number): Observable<Repositorio | undefined> {
    return this.getRepositories().pipe(
      map(repos => repos.find(r => r.id === id))
    );
  }
}
