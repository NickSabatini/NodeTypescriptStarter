import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies=[];
  query;
  constructor(private projSvc:ProjectsService) { 
    
    this.query = "Spongebob"
    projSvc.getProjects(this.query).subscribe(result=>{
      let length = result.results.length;
      for(let i = 0; i < length; i++){
        this.movies.push(result.results[i].title);
      }
      
      //this.semesters = [1];
    })
  }

  ngOnInit(): void {
  }

}
