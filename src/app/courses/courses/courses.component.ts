import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]> = this.coursesService.list()
  .pipe(
    catchError(error => {
      this.onError('Erro ao carregar aplicação');
      return of([])
    })
    );

  displayedColumns: string[] = ['name', 'categoria'];
  dataSource = new MatTableDataSource<Course>();

  constructor(private coursesService: CoursesService,
    public dialog: MatDialog
    ) {}

    onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg,
      });
    }

  ngOnInit(): void {
    this.courses$.subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
