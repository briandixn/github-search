import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
   heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: ''
  };

submitted = false;

submitForm = form => {
   this.submitted = true;


  this.http.get('https://api.github.com/users/form.value.title').subscribe(data =>
    this.gitdata = {
   id: data.id,
   bio: data.bio,
 });
}


  constructor(private http: HttpClient) { }

  ngOnInit():void  {


  }

}
