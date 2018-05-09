import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  page = {
    title: "Test",
    rating: "Rating: " + "90%"
  }
  constructor() { }

  ngOnInit() {
  }

}
