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
  posters = [];
  urlStart = "https://image.tmdb.org/t/p/w500/";
  query = "a";
  constructor(private projSvc: ProjectsService) {
    console.log(this.posters);
    //this.posters.push("https://image.tmdb.org/t/p/w500/i5xiwdSsrecBvO7mIfAJixeEDSg.jpg");
    //this.posters.push("https://image.tmdb.org/t/p/w500/i5xiwdSsrecBvO7mIfAJixeEDSg.jpg");

    //this.query = this.myForm.value;
    //console.log(this.myForm.value);
    projSvc.getProjects(this.query).subscribe(result => {
      let length = result.results.length;
      for (let i = 0; i < length; i++) {
        this.movies.push(result.results[i].title);
        this.posters.push(this.urlStart + result.results[i].poster_path);
      }
    })

  }
  //myForm: FormGroup;
  ngOnInit() {
  }

  onSubmit(data) {
    this.query = data.search;
    this.movies = [];
    this.posters = [];
    this.projSvc.getProjects(this.query).subscribe(result => {
      let length = result.results.length;
      for (let i = 0; i < length; i++) {
        this.movies.push(result.results[i].title);
        //console.log(this.urlStart + result.results[i].poster_path)
        this.posters.push(this.urlStart + result.results[i].poster_path);
      }
    })
    //console.log(this.movies);
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