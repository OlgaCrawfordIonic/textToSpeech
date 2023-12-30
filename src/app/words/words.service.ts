import { Injectable } from '@angular/core';
import { Word } from './words.model';
import { BehaviorSubject, take,map,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
private _words=new BehaviorSubject<Word[]>([]);

constructor() {
  this.initializeWords();
 }
private initializeWords() {
const words: Word[]=[
  new Word(
    0,
    {word:'fille',article: 'une', redWord:'une fille'},
    '../../assets/images/1.png', // Assuming this is a string path to an image
    [
      { language: 'English', text: 'a girl' },
      { language: 'German', text: 'ein Mädchen' },
      { language: 'Spanish', text: 'una niña' },
      { language: 'Chinese', text: '一个女孩' },
      { language: 'Russian', text: 'девочка' }
    ],
    '', // Transcription
    [], // Synonyms
    [], // Notes
    {sentence:"une fille va à l'école",redWord: "une fille"}, // Example 1
    '../../assets/images/2.png', // Path to image for example 1
    [
      { language: 'English', text: 'a girl goes to school' },
      { language: 'German', text: 'ein Mädchen geht zur Schule' },
      { language: 'Spanish', text: 'una niña va a la escuela' },
      { language: 'Chinese', text: '一个上学的女孩' },
      { language: 'Russian', text: 'девочка идёт в школу' }
    ], // Translations for example 1
    {sentence:"une fille lit un livre", redWord:"une fille"}, // Example 2
    '../../assets/images/3.png', // Path to image for example 2
    [
      { language: 'English', text: 'a girl reads a book' },
      { language: 'German', text: 'ein Mädchen liest ein Buch' },
      { language: 'Spanish', text: 'una niña lee un libro' },
      { language: 'Chinese', text: '一个正在看书的女孩' },
      { language: 'Russian', text: 'девочка читает книгу' }
    ], // Translations for example 2
    [], // Categories
    []  // Level
  )
  
    ]  
    this._words.next(words.map((word, index) => {
      word.id = index;
      return word;
    }));
  }

  get words() {
    return this._words.asObservable();
  }
  getWord(id: string ) {
    return this.words.pipe(
      take(1),
      map(words => {
        const word = words.find(w => w.word && w.word.word === id); // Check if w.word is defined
        if (!word) {
          return null; // or handle the undefined case as needed
        }
        return { ...word };
      })
    );
  }
  

}

/*<p>
    1. 🇬🇧  a girl goes to school, a girl reads a book
    2. 🇫🇷  une fille, une fille va à l'école, une fille lit un livre
    3. 🇩🇪  ein Mädchen, ein Mädchen geht zur Schule, ein Mädchen liest ein Buch
    4. 🇪🇸 una niña, una niña va a la escuela, una niña lee un libro
    5. 🇨🇳 一个女孩 一个上学的女孩。一个正在看书的女孩
    6. 🇷🇺 девочка, девочка идёт в школу, девочка читает книгу
 </p> 
   
Spanish una niña, una niña va a la escuela, una niña lee un libro

ein Mädchen, ein Mädchen geht zur Schule, ein Mädchen liest ein Buch

девочка, девочка идёт в школу, девочка читает книгу
*/
