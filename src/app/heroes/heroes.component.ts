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

gitdata = {
  id: null,
  bio: null,
  login: null,
}

submitted = false;

submitForm = form => {
  console.log(form);
   this.submitted = true;


  this.http.get(`https://api.github.com/users/${form.value.login}`).subscribe(data => {
    console.log(data);
    this.gitdata = {
      login: data.login,
   id: data.id,
   bio: data.bio,
 };
});
}


  constructor(private http: HttpClient) { }

  ngOnInit():void  {


  }

}
