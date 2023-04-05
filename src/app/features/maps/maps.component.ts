import { HomeModel } from 'src/app/features/home/home.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/shared/services/home.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent  implements OnInit{

  homeModel!: HomeModel 

  cidades: string = ''

  
  constructor(
    
    private homeService: HomeService,
    private activeRoute: ActivatedRoute,
    private sanitizer : DomSanitizer
  ) {

  }


  ngOnInit(){
    const id = this.activeRoute.snapshot.paramMap.get('name') as 'string';

    this.homeService.readById(id).subscribe(data => {
      this.homeModel = (data as any)[0]
    })
    
  }


}


