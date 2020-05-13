import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router, Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private studentsService: StudentsService,
    private router: Router,
    private routes: ActivatedRoute
  ) {}

  addForm: FormGroup;
  ngOnInit() {
    const routeParams = this.routes.snapshot.params;

    this.studentsService.getById(routeParams.id).subscribe((data: any) => {
      //console.log(data);
      this.addForm.patchValue(data);
    });
    this.addForm = this.formBuilder.group({
      sId: [''],
      fName: ['', Validators.required],
      lName: ['', [Validators.required, Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  Update() {
    this.studentsService.updateStudent(this.addForm.value).subscribe(() => {
      this.router.navigate(['view']);
    });
    console.log(this.addForm.value);
  }
}
