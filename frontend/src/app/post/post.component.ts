import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any;
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    //this.http.get('https://jsonplaceholder.typicode.com/posts')
    this.http.get('http://localhost:8081/profesor')
    .subscribe(res=>{
      this.posts=res
    })
  }

}
