import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
import { HomeModel } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 
  title: string = 'Details of all countries'

  select: string= 'All regions'

  regions: string[] = []

  progressBar: boolean = true

  homeModel: HomeModel[] = [ {
    name: {
      common: ''
    },
    capital: '',
    region: '',
    subregion: '',
    flags: {
      svg: ''
    }
  } ]

  constructor(
    private homeService: HomeService,
  ) {
  }


  ngOnInit(): void {

    if(this.select == 'All regions') {
      this.homeService.getAll().subscribe(data => {

        this.homeModel = data

        this.progressBar = !this.progressBar

      })
    } else {
      this.onRegion(this.select)
      this.progressBar = !this.progressBar

    }

  }



  onRegion(region: string) {

    if(this.select === 'All regions') {

      this.homeService.getAll().subscribe(data => {

      this.homeModel = data

      })
    } else {
    this.homeService.getRegion(region).subscribe(data => {

      this.homeModel = data

    })

  }} 
}