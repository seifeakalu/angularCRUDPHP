import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private studentsService: StudentsService,
    private router: Router
  ) {}
  addForm: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', [Validators.required, Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  onSubmit() {
    //console.log(this.addForm.value);
    this.studentsService.createStudent(this.addForm.value).subscribe((data) => {
      this.router.navigate(['view']);
    });
  }
  edit(students: Students) {
    this.router.navigate(['edit' + this._id]);
  }
}
