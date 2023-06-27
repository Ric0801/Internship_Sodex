import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  async getTeamsResponse() {
    try {
      const response = await fetch("https://api-nba-v1.p.rapidapi.com/teams?id=&name=&code=&league=&conference=&division=", {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '395acc3761msh8c7b29a36b5430bp19a90fjsn07e2336b7c27',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  }
}