import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/interface/iauthor';
import { AuthorService } from 'src/app/services/author.service';


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
  authorList : IAuthor[] = [];
  // det der står inde i constructor er nu en property i class.
  constructor(private api:AuthorService) { }  //DI services eller moduler eller noget vodoo

  ngOnInit(): void { // denne metode kører når component bygges
    //this.authorList= this.api.getAuthorsHardcoded();
    this.getAuthors();
  }
  // invokes ellers virker den ikke!!
  getAuthors(){
    // vi skal benytte vores authorService, så hvordan?
    this.api.getAuthors().subscribe((data)=>{
      console.log("vi tester lige " +data);
  //    this.authorList = data;
    })
  }

  //#region startMethods
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
    // fyld både id
    let temp : IAuthor[] = [{authorId : 1},{authorId : 2},{authorId : 3} ];
    this.authorList = temp;
  }
  buttonClick4(){
    let temp : IAuthor[] = [
      {firstName:"Hans"},
      {firstName:"Thor"},
      {firstName:"Batman"}
    ];
  }
  buttonClick5(){
    let temp : IAuthor[] = [
      {authorId:1, firstName:"Hans"},
      {authorId:2, firstName:"Thor"},
      {authorId:3, firstName:"Batman"}
    ];
    this.authorList	= temp;
  }
  //#endregion start methods
}
