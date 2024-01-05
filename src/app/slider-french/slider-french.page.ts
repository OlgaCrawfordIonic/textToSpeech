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
  comments?:boolean;
  commentsButton='';
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
    
  constructor(private wordS: WordsService) {  }

    showComments() {
      this.comments = !this.comments;
      this.commentsButton = this.comments ? "Hide Comments" : "Show Comments";
    }
    
   

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
  
  
  // In your component class

// Add this method to split the title into three parts
splitTitle(item: SliderItem): { before: string; red: string; after: string } {
  const { title, redWord } = item;
  const index = title?.indexOf(redWord);
  if (index !== undefined && index >= 0) {
    return {
      before: title.substring(0, index),
      red: redWord,
      after: title.substring(index + redWord.length)
    };
  }
  return { before: title, red: '', after: '' }; // If redWord is not found
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
  public auto() {
    console.log('Auto was clicked');
  
    // Check if there are slider items
    if (this.sliderItems.length > 0) {
      // Function to handle speaking
      const speakTitle = () => {
        this.speakNormalRate(this.sliderItems[this.currentSlide].title);
        this.speak(this.sliderItems[this.currentSlide].title);
      };
  
      // Function to advance to the next slide and speak
      const advanceAndSpeak = () => {
        if (this.currentSlide < this.sliderItems.length) {
          speakTitle();
  
          // Determine the delay for the current slide
          const delay = ()=> {
            if (this.currentSlide===0){
              return 10000;
            }
            else if (this.currentSlide===1){
              return 3500;
            }
            else {return 5000}

          } 
          //const delay=this.currentSlide === 0? 3500 : 5000;
  
          // Set a timeout to advance to the next slide after the delay
          setTimeout(() => {
            this.currentSlide++;
            if (this.currentSlide < this.sliderItems.length) {
              advanceAndSpeak(); // Continue with the next slide
            } else {
              console.log('End of slides');
            }
          }, delay());
        }
      };
  
      // Start with the first slide
      advanceAndSpeak();
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
  this.commentsButton= this.comments ? "Show Comments": "Hide Comments";
   
    this.processedItems = this.items.map(item => {
      const splitTitle = item.title.split(item.redWord);
      return {
        ...item,
        titleBeforeRed: splitTitle[0],
        titleAfterRed: splitTitle[1]
      };
    });

    this.wordSub = this.wordS.getWord('chien').subscribe(word => {
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
      const exampleSentence = this.word.example1?.sentence;

      this.sliderItems=[
        {image:image2, title:'one,two,three,four,five,six,seven,eight,nine,ten,start!', redWord:'one,two,three,four,five,six,seven,eight,nine,ten,start!'},
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
