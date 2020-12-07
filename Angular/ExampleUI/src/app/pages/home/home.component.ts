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
  overviews = [];
  posters = [];
  combined = [];
  StreamingServices = [];
  favID = [];
  urlStart = "https://image.tmdb.org/t/p/w500/";
  query = "a";

  constructor(private projSvc: ProjectsService) {
    let count = 0;
    projSvc.getFavorites("user").subscribe(result => {
      count = result.length;
      for(let i = 0; i < result.length; i++){
        this.favID.push(result[i].id);
      }
      for(let i = 0; i < result.length; i++){
        projSvc.getDetails(this.favID[i]).subscribe(resultb => {
          
        let test = this.findServices(resultb.id);

        this.movies.push(resultb.title);
        this.overviews.push(resultb.overview);
        this.posters.push(this.urlStart + resultb.poster_path);

        this.combined.push({ movie: resultb.title, poster: this.urlStart + resultb.poster_path, overviews: resultb.overview, ids: resultb.id, Aservices: test})


        })
      }
    })
    //console.log(count);
    /*
    projSvc.getProjects(this.query).subscribe(result => {
      let length = result.results.length;
      for (let i = 0; i < length; i++) {

        let test = this.findServices(result.results[i].id);

        this.movies.push(result.results[i].title);
        this.overviews.push(result.results[i].overview);
        this.posters.push(this.urlStart + result.results[i].poster_path);

        this.combined.push({ movie: result.results[i].title, poster: this.urlStart + result.results[i].poster_path, overviews: result.results[i].overview, ids: result.results[i].id, Aservices: test})

      }
    })*/
  }
  
  //myForm: FormGroup;
  ngOnInit() {
  }

  findServices(data) {
    let services = [];
    this.projSvc.getServices(data).subscribe(Aresult => {
      try {
        let length = Aresult.results.US.flatrate.length;
        for (let i = 0; i < length; i++) {
          let temp = Aresult.results.US.flatrate[i].provider_name;
          services.push(temp);
        }
        //console.log(services);
      }
      catch {
        //console.log("no services");
        services.push("NO STREAMING SERVICES")
      }
      //console.log(this.StreamingServices);
    })

    return services;
  }


  onSubmit(data) {
    this.query = data.search;
    this.movies = [];
    this.posters = [];
    this.combined = [];
    this.projSvc.getProjects(this.query).subscribe(result => {
      let length = result.results.length;
      for (let i = 0; i < length; i++) {
        
        let test = this.findServices(result.results[i].id);

        this.movies.push(result.results[i].title);
        this.overviews.push(result.results[i].overview);
        this.posters.push(this.urlStart + result.results[i].poster_path);
        this.combined.push({ movie: result.results[i].title, poster: this.urlStart + result.results[i].poster_path, overviews: result.results[i].overview, ids: result.results[i].id, Aservices: test})
        //console.log(this.services);
      }
    })
  }



  //not used at the moment
  showMovies() {
    this.movies = [];
    this.projSvc.getProjects(this.query).subscribe(result => {
      let length = result.results.length;
      for (let i = 0; i < length; i++) {
        this.movies.push(result.results[i].title);
      }
    })

  }



}
