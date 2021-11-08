import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/interface/iauthor';


//Decorator , det er meta data om en class i Angular
@Component({
  selector: 'app-author', // den måde vi tilgår vores component
  templateUrl: './author.component.html', // vores html fil
  styleUrls: ['./author.component.css'] // vores css fil
})
/*
  få knapperne til at virke  - så de kan kalde de 3 metoder
  prøv at lave en variabel (array) af Interface IAuthor og importer det
  Prøv at populer / tilsæt data arrayet nede i en af metoderne med 2 eller 3 objekter
  */
export class AuthorComponent implements OnInit {
  author : IAuthor[] = [];
  constructor() { }  //DI

  ngOnInit(): void { // denne metode kører når component bygges
  }

  // Events / Handlinger
  buttonClick(){
    // console.log("clicked");
    let authors = [1,2,3];
    console.log(authors);
  }
  buttonClick2(){
    let authors : string[] = ["bo", "ib"];
    console.log(authors);
  }
  buttonClick3(){
    // fyld både id og firstname ud ellers kommer der en fejl....
    // let authors =
    // console.log(authors);
  }
}
