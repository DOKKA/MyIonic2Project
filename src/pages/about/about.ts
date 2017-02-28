import { Component } from '@angular/core';

import { NavController,Slides } from 'ionic-angular';
import { ViewChild, ViewChildren , QueryList, ElementRef} from '@angular/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  @ViewChild(Slides) slidecmp: Slides;

  @ViewChildren('videoplayer') videoplayers: QueryList<ElementRef>;

  slides:{url: string}[] = [];

  urls =[
  {
    "id": "5vzmtd",
    "url": "http://i.imgur.com/01znVeK.gif",
    "title": "Dog and cow happy to see each other",
    "created": 1487994395
  },
{
  "id": "5stst0",
  "url": "http://i.imgur.com/VBcXOyC.gifv",
  "title": "Golden retriever attack",
  "created": 1486601266
},
{
  "id": "5oyp7v",
  "url": "http://i.imgur.com/sPQRnZu.mp4",
  "title": "The after yawn hug got to me..",
  "created": 1484883220
},
{
  "id": "5oymi4",
  "url": "http://i.imgur.com/bzUdVKO.mp4",
  "title": "Nighty Night",
  "created": 1484882543
},
{
  "id": "5os7dt",
  "url": "http://i.imgur.com/QoCS8hB.gifv",
  "title": "Cat is such a drama queen",
  "created": 1484803321
},
{
  "id": "5otfo7",
  "url": "http://i.imgur.com/ZmCw1ee.gifv",
  "title": "That smile!",
  "created": 1484815843
},
{
  "id": "5okb7h",
  "url": "https://i.imgur.com/BQoGpUj.gifv",
  "title": "Excuse me miss... I would like to make a treat withdrawal...",
  "created": 1484711884
},
{
  "id": "5oikf4",
  "url": "https://media.giphy.com/media/l3q2NvxYQlPAgpwHu/giphy.gif",
  "title": "Naughty Cat",
  "created": 1484694716
},
{
  "id": "5ojvs0",
  "url": "https://i.imgur.com/tcJBGZ9.gifv",
  "title": "When you're in a hurry",
  "created": 1484707703
},
{
  "id": "5o5ejf",
  "url": "http://i.imgur.com/cPiX3r8.gif",
  "title": "It's like, they are separated for years",
  "created": 1484533200
},
{
  "id": "5nkvyd",
  "url": "http://i.imgur.com/Cw8JTkg.gifv",
  "title": "Doggo can't contain himself when his owner says WALK",
  "created": 1484273067
}];

  testFunction(){
    //this.videoPlayer.nativeElement.pause();
    this.videoplayers.toArray()[this.slidecmp.getActiveIndex()].nativeElement.play()
    //this.videoPlayer.pause();
    //this.slides.push({text: 'woo'});
    //this.slidecmp.slideTo(2, 500)
    //debugger;

  }

  slideChanged(event){
    //this.videoplayers.toArray()[this.slidecmp.getActiveIndex()].nativeElement.play()
if (this.slidecmp.isEnd()){
  let url = this.urls[this.slides.length -1].url;
  url = url.replace('.gifv','.mp4');
  this.slides.push({url: url});
  console.log(this.slidecmp.length());
}
    //
    //var x = event;
    //debugger;

  }
  constructor(public navCtrl: NavController) {
    let url = this.urls[1].url;
    url = url.replace('.gifv','.mp4');
    this.slides.push({url: url});
  }

}
