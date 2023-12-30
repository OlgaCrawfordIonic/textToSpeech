import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TextToSpeech, TTSOptions } from '@capacitor-community/text-to-speech';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SliderPage implements OnInit {
  public processedItems: any[] = [];
  public items = [
    { image: '../../assets/images/1.png', title: 'une fille', redWord: 'une fille' },
    { image: '../../assets/images/1.png', title: 'une fille', redWord: 'une fille' },
    { image: '../../assets/images/1.png', title: 'une fille' , redWord: 'une fille'},
    { image: '../../assets/images/1.png', title: 'une fille' , redWord: 'une fille'},
    { image: '../../assets/images/2.png', title: 'une fille va a ecole' , redWord: 'une fille'},
    { image: '../../assets/images/3.png', title: 'une fille lit un livre', redWord: 'une fille'},
    // ... more items
  ];

  public testItems=[
    { image: '../../assets/images/1.png', title: 'Une fille', redWord: 'Une fille', },
    { image: '../../assets/images/2.png', title: 'Une fille va a ecole',  redWord: 'Une fille', },
    { image: '../../assets/images/3.png', title: 'Une fille lit un livre' ,  redWord: 'Une fille',},

    ]

    public testItems1=[
      { image: '', title: '', redWord: 'Une fille', },
      { image: '', title: '',  redWord: 'Une fille', },
      { image: '', title: '' ,  redWord: 'Une fille',},
  
      ]

    frenchDict=[
      {id: 0 ,
       word: 'une fille',
       redWord: 'une fille',
       transcription:'',
       picture:'',}
    ]
  public currentSlide = 0;
  constructor() { }
  speak(text:string){
    console.log('Parle' + text);
    TextToSpeech.speak({
      pitch: 1.1,
    
      rate: 0.8,
      voice: 149,// 4 Amilie
      text: text
    });
  }

  speakNormalRate(text:string){
    console.log('Parle' + text);
    TextToSpeech.speak({
      pitch: 1.2,
    
      rate: 0.9,
      voice: 149,//Google french
      text: text,
      category: "ambient"
    });
  }

  forward(){
    this.currentSlide=this.currentSlide+1;
  }
  auto(){
    console.log('Auto was clicked');
    this.speakNormalRate(this.items[0].title);
    this.speak(this.items[0].title);
    if (!(this.currentSlide===this.items.length-1)){
      setInterval(() => {
         this.currentSlide=this.currentSlide+1;
         this.speakNormalRate(this.items[this.currentSlide].title);
         this.speak(this.items[this.currentSlide].title)
    },7000);
  }
    else{console.log('end of slides')}
  }
  ngOnInit() {
    this.processedItems = this.items.map(item => {
      const splitTitle = item.title.split(item.redWord);
      return {
        ...item,
        titleBeforeRed: splitTitle[0],
        titleAfterRed: splitTitle[1]
      };
    });
  this.testItems1= [{ image: '', title: '', redWord: 'Une fille', },
  { image: '', title: '',  redWord: 'Une fille', },
  { image: '', title: '' ,  redWord: 'Une fille',},
  ]
  }

}
