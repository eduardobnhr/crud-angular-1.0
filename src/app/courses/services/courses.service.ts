import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Curso de Angular', categoria: 'Programação' },
      { _id: '2', name: 'Curso de React', categoria: 'Programação' },
      { _id: '3', name: 'Curso de Design UI/UX', categoria: 'Design' },
      { _id: '4', name: 'Curso de Fotografia Digital', categoria: 'Fotografia' }
    ];
  }
}
