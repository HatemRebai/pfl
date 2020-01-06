import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public password: string,

  ) { }
}
export class Vote {
  constructor(
    public id: number,
    public oui: string,
    public non: string,
    public sujet: Sujet

  ) { }
}
export class Sujet {
  constructor(
    public id: number,
    public titre: string,
    public description: string,
    public vote: Vote,
    public user: User

  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }



  Url = 'http://localhost:9090/sujet/addSujet';
  Url1 = 'http://localhost:9090/sujet//allSujet';
  Url2 = 'http://localhost:9090/vote/voter'

  addSujet(sujet: Sujet) {
    return this.http.post<Sujet>(this.Url, sujet);
  }
  getAllsujet() {
    return this.http.get<Sujet>(this.Url1 + '/');
  }
  addVote(vote: Vote , id: number) {
    return this.http.post<Vote>(this.Url2, vote + '/' + id);
  }
}
