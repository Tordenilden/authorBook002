import { Injectable } from '@angular/core';
import { IAuthor } from '../interface/iauthor';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
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

  // getAuthors():Observable<IAuthor[]>{
  //   return this.http.get<IAuthor[]>(this.url);
  // }
}
