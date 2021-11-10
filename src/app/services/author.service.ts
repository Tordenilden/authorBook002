import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // samme som Async
import { IAuthor } from '../interface/iauthor';


// HttpHeaders definere hvilket format vi sender i bla.
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
  // getauthorById, getAuthors, createAuthor, deleteAuthor ....
  // hvad er forskellen mellem let og var
  // var er global scoped
  // let er local scoped
  // betyder det noget? (mange gange nej,
  // MEN der kan være situationer hvor det er rigtig skidt)
  getAuthorsHardcoded():IAuthor[]{
    let authors : IAuthor[] = [
      {authorId:1, firstName:"Hans"},
      {authorId:2, firstName:"Thor"},
      {authorId:3, firstName:"Batman"}
    ];
    return authors;
  }
  url : string = "https://localhost:44378/api/Authors/Flødeboller"; // vores url til api
  baseUrl : string = "https://localhost:44378/api/";
  getAuthors():Observable<IAuthor[]>{
    //console.log(this.http.get<IAuthor[]>(this.url));
    return this.http.get<IAuthor[]>(this.url);
  }
  // https://localhost:44378/api/Authors/4
  // https://localhost:44378/api/Authors/3
  deleteAuthor(authorId:number):Observable<IAuthor>{
    return this.http.delete<IAuthor>(`${this.baseUrl}Authors/${authorId}`);
  }

  // getAuthors():Observable<IAuthor[]>{
  //   return this.http.get<IAuthor[]>(this.url);
  // }
}
