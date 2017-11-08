import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = "Authors Details";
  authors: string[];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authors = this.authorsService.getAuthors();
  }

}
