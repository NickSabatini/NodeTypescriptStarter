import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  myForm = new FormGroup({
    search: new FormControl('')
  });
  movies = [];
  query = "a";
  constructor(private projSvc: ProjectsService) {
    //this.query = this.myForm.value;
    //console.log(this.myForm.value);
    projSvc.getProjects(this.query).subscribe(result => {
      let length = result.results.length;
      for (let i = 0; i < length; i++) {
        this.movies.push(result.results[i].title);
      }
    })

  }
  //myForm: FormGroup;
  ngOnInit() {
  }

  onSubmit(data) {
    this.query = data;
    console.log(data);
    this.movies = [];
    this.projSvc.getProjects(this.query).subscribe(result => {
      let length = result.results.length;
      for (let i = 0; i < length; i++) {
        this.movies.push(result.results[i].title);
      }
    })
    console.log(this.movies);
  }


  showMovies(){
    this.movies = [];
    this.projSvc.getProjects(this.query).subscribe(result => {
      let length = result.results.length;
      for (let i = 0; i < length; i++) {
        this.movies.push(result.results[i].title);
      }
    })
    
  }



}
