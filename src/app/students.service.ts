import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './students';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<Students[]>('http://localhost/AngularCRUD/list.php');
  }
  deleteStudent(id: number) {
    return this.http.get<Students[]>(
      'http://localhost/AngularCRUD/delete.php?id=' + id
    );
  }
  createStudent(student: Students) {
    return this.http.post('http://localhost/AngularCRUD/insert.php', student);
  }
  getById(id: number) {
    return this.http.get<Students[]>(
      'http://localhost/AngularCRUD/getStudentById.php?id=' + id
    );
  }
  updateStudent(student: Students) {
    return this.http.put(
      'http://localhost/AngularCRUD/update.php' + '?id=' + student.sId,
      student
    );
  }
}
