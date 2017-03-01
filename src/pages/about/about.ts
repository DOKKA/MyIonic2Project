import { Component } from '@angular/core';

import { NavController,Slides } from 'ionic-angular';
import { ViewChild, ViewChildren , QueryList, ElementRef} from '@angular/core';
import gifs from '../../app/awwgifs';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  @ViewChild(Slides) slidecmp: Slides;

  @ViewChildren('videoplayer') videoplayers: QueryList<ElementRef>;

  slides:{url: string}[] = [];

  pushSlide(index){
    let url: string = '';

    if(index != null){
      url = gifs[index].url;
    } else {
      url = gifs[this.slides.length].url;
    }
    url = url.replace('.gifv','.mp4');
    this.slides.push({url: url});
  }

  testFunction(){
    this.videoplayers.toArray()[this.slidecmp.getActiveIndex()].nativeElement.play();
  }

  slideChanged(event){
    console.log('slide changed')
    //this.videoplayers.toArray()[this.slidecmp.getActiveIndex()].nativeElement.play()
    if (this.slidecmp.isEnd()){
      this.pushSlide(null);
    }

  }
  constructor(public navCtrl: NavController) {
    this.pushSlide(0);
    this.pushSlide(1);
  }

}
