import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeModel } from 'src/app/features/home/home.model';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  homeModel: HomeModel[] = []

  urlBase: string = 'https://restcountries.com/v3.1/all'

  constructor(
    private http: HttpClient
    ) { }


  getAll(): Observable<HomeModel[]> {
    return this.http.get<HomeModel[]>(this.urlBase)
    }

  getRegion(region: string): Observable<HomeModel[]> {
    const url = `https://restcountries.com/v3.1/region/${region}`
    return this.http.get<HomeModel[]>(url)
  }

  readById(name: string): Observable<HomeModel> {

    const url = `https://restcountries.com/v3.1/name/${name}`

    return this.http.get<HomeModel>(url)
  }

}

