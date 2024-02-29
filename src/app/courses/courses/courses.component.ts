import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]> = this.coursesService.list();
  displayedColumns: string[] = ['name', 'categoria'];
  dataSource = new MatTableDataSource<Course>();

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses.subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
