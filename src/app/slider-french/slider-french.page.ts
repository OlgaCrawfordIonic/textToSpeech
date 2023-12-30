import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TextToSpeech, TTSOptions } from '@capacitor-community/text-to-speech';
import { WordsService } from '../words/words.service';
import { Word } from '../words/words.model';
import { Subscription } from 'rxjs';
interface SliderItem {
  image?: string;
  title: string;
  redWord: string;
}

@Component({
  selector: 'app-slider-french',
  templateUrl: './slider-french.page.html',
  styleUrls: ['./slider-french.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SliderFrenchPage implements OnInit {
  
  
  getExampleTranslation(translations: { language: string, text: string }[] | undefined, language: string): string {
    // Provide a default value (empty array) if translations is undefined
    const translation = (translations || []).find(t => t.language === language);
    return translation ? translation.text : '';
  }
 public sliderItems:SliderItem[]=[
    
  ];
 
  word?:Word;
  wordSub!:Subscription;
  image?:string
  public currentSlide = 0;
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

  
    frenchDict=[
      {id: 0 ,
       word: 'une fille',
       redWord: 'une fille',
       transcription:'',
       picture:'',}
    ]
    
  constructor(private wordS: WordsService) { }
  

  getFlagEmoji(language: string): string {
    // Define an index signature for the flags object
    const flags: { [key: string]: string } = {
      'English': '🇬🇧',
      'German': '🇩🇪',
      'Spanish': '🇪🇸',
      'Chinese': '🇨🇳',
      'Russian': '🇷🇺'
      // Add more mappings as needed
    };
  
    // Use the index signature to safely access the flags object
    return flags[language] || '';
  }
  
  
  

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
  public auto(){
    console.log('Auto was clicked');
  
    // Check if there are slider items and the current slide index is valid
    if (this.sliderItems.length > 0 && this.currentSlide < this.sliderItems.length) {
      // Speak the title of the current slide
      this.speakNormalRate(this.sliderItems[this.currentSlide].title);
      this.speak(this.sliderItems[this.currentSlide].title);
  
      // Set up an interval to go to the next slide and speak its title
      const interval = setInterval(() => {
        if (this.currentSlide < this.sliderItems.length - 1) {
          this.currentSlide++;
          this.speakNormalRate(this.sliderItems[this.currentSlide].title);
          this.speak(this.sliderItems[this.currentSlide].title);
        } else {
          console.log('End of slides');
          clearInterval(interval); // Stop the interval when the last slide is reached
        }
      }, 5000);
    } else {
      console.log('No slider items or invalid current slide index');
    }
  }
  
 public auto1(){
    console.log('Auto was clicked');
  //  this.speakNormalRate(this.sliderItems[0].title);
    this.speak(this.sliderItems[0].title);
    if (!(this.currentSlide===this.sliderItems.length-1)){
      setInterval(() => {
       
         this.currentSlide=this.currentSlide+1;
         this.speakNormalRate(this.sliderItems[this.currentSlide].title);
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

    this.wordSub = this.wordS.getWord('fille').subscribe(word => {
      if (word) {
        this.word = word;
        console.log(this.word);
        this.image=this.word.pathToImage;
        const image1=this.word.pathToImage1;
        const image2=this.word.pathToImage2;
        
       // Check if translations is defined and has at least one element
    if (this.word.translations && this.word.translations.length > 0) {
      const parsedData = this.word.translations[0] as { language: string, text: string };
      console.log(parsedData.language);
      const title1=this.word.word as {word:string, redWord:string};
      console.log(title1.word);
      const example1=this.word.example1 as {sentence:string, redWord:string}
      const example2=this.word.example2 as {sentence:string, redWord:string}

      this.sliderItems=[
        {image:this.image, title:title1.redWord, redWord:title1.redWord},
        {image:image1, title:example1.sentence, redWord:example1.redWord},
        {image:image2, title:example2.sentence, redWord:example2.redWord}

      ]
     
    } else {
      // Handle the case where translations is undefined or empty
    }
        
        
      } else {
        // Handle the undefined case, maybe set this.word to a default Word object or take other actions
      }
    });
/*
       if(this.word){
     
      const image=this.word.pathToImage1;
      const title1=this.word.word;
      const wordSlider: string | undefined=title1[0]
      const word1: string | undefined = (firstWord.word[0] !== undefined ? firstWord.word[0] : undefined) as string | undefined;

    this.testItems1=[
      { image:image, title: wordSlider, redWord: 'Une fille', },
      { image: '', title: '',  redWord: 'Une fille', },
      { image: '', title: '' ,  redWord: 'Une fille',},
        ]
      }
        else{
          this.testItems1=[
            { image:'', title: '', redWord: 'Une fille', },
            { image: '', title: '',  redWord: 'Une fille', },
            { image: '', title: '' ,  redWord: 'Une fille',},
              ]
        }*/
    
  }
  ngOnDestroy(){
    this.wordSub.unsubscribe();
  }

   
  

}
