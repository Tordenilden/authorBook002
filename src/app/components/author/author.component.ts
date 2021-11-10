import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IAuthor } from 'src/app/interface/iauthor';
import { AuthorService } from 'src/app/services/author.service';

//#region gone
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
 //#endregion gone
export class AuthorComponent implements OnInit {
  authorList : IAuthor[] = [];
  author : IAuthor = {} as IAuthor; // skal caste hvis ikke alle er nullable
  // det der står inde i constructor er nu en property i class.

  //HTML FORMS
  authorForm = new FormGroup({
    firstName : new FormControl('')
  });


  constructor(private api:AuthorService) { }  //DI services eller moduler eller noget vodoo

  ngOnInit(): void { // denne metode kører når component bygges
    //this.authorList= this.api.getAuthorsHardcoded();
    this.getAuthors();
    // this.author = {firstName: "Ida"};
    // this.createAuthor(this.author);
    console.log("virker det");

  }

  getInput(firstName: string){
    console.log(firstName);

  }
  deleteAuthor(Id:number){

    this.api.deleteAuthor(Id).subscribe(); // tjek på om det gik igennem
    let foundAuthor = this.authorList.findIndex(({authorId})=> authorId == Id);
    this.authorList.splice(foundAuthor,1);
  }
  createAuthor(authorObj : IAuthor){
    console.log(authorObj);

    this.api.createAuthor(authorObj).subscribe(data =>{
      console.log(data);
      // kunne være fedt når det findes i databasen at vores authorList
      // bliver opdateret med de nye data :)
      this.authorList.push(data); // får vi PK med
      //this.authorList.push(authorObj); // uden PK med
// ER DET refresh eller hvad? find ud af
//det til imorgen (lektioer)
    })
  }
  submitForm(temp:any){
    console.log(temp);

  }
// ALTERNATIVT TIL DEN DELETE VI HAR LAVET KAN VI GETAUTHORS IGEN OFC.
// BUT I DONT LIKE IT
// VI STARTER LIGE MED GITHUB BAGEFTER
// BAGEFTER CREATE AUTHOR MM.


  // invokes ellers virker den ikke!!
  getAuthors(){
    console.log("testing");
    // vi skal benytte vores authorService, så hvordan?
    this.api.getAuthors().subscribe((data)=>{

      console.log(data);

      //console.log("vi tester lige " +data);
     this.authorList = data;
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
    // let temp : IAuthor[] = [
    //   {firstName:"Hans"},
    //   {firstName:"Thor"},
    //   {firstName:"Batman"}
    // ];
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
