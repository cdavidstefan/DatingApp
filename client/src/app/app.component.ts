import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // layout suggestion inside the class: properties at the top, followed by the constructor, followed by any used methods.
  // CORS is a browser security feature. cross origin resource sharing.
  // users: any - turns typescript safety off. like declaring a variable in JS.
  
  title = 'Dating App!';
  users: any;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log('Observer error', error),
      complete: () => console.log('Request completed.')
    })
  }
}