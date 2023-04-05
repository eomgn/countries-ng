import { HomeModel } from 'src/app/features/home/home.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/shared/services/home.service';
import { DomSanitizer } from '@angular/platform-browser';

import { key } from 'src/key';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent  implements OnInit{

  homeModel!: HomeModel 

  url: string = ''

  constructor(
    
    private homeService: HomeService,
    private activeRoute: ActivatedRoute,
    private sanitizer : DomSanitizer,
  ) {

  }


  ngOnInit(){
    const id = this.activeRoute.snapshot.paramMap.get('name') as 'string';

    this.homeService.readById(id).subscribe(data => {
      this.homeModel = (data as any)[0]

      this.url = `https://www.google.com/maps/embed/v1/place?key=${key.key}&q=${this.homeModel.name.common}`
    })
    
  }

  securityUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
  }


}


