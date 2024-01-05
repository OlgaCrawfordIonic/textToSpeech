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
    1,  
    {word:'fille',article: 'une', redWord:'une fille'},
    '../../assets/images/1to30/1/1.png', // Assuming this is a string path to an image
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
    '../../assets/images/1to30/1/2.png', // Path to image for example 1
    [
      { language: 'English', text: 'a girl goes to school' },
      { language: 'German', text: 'ein Mädchen geht zur Schule' },
      { language: 'Spanish', text: 'una niña va a la escuela' },
      { language: 'Chinese', text: '一个上学的女孩' },
      { language: 'Russian', text: 'девочка идёт в школу' }
    ], // Translations for example 1
    {sentence:"une fille lit un livre", redWord:"une fille"}, // Example 2
    '../../assets/images/1to30/1/3.png', // Path to image for example 2
    [
      { language: 'English', text: 'a girl reads a book' },
      { language: 'German', text: 'ein Mädchen liest ein Buch' },
      { language: 'Spanish', text: 'una niña lee un libro' },
      { language: 'Chinese', text: '一个正在看书的女孩' },
      { language: 'Russian', text: 'девочка читает книгу' }
    ], // Translations for example 2
    [], // Categories
    [] , // Level
    
  ),
  new Word(
    2,
    {word:'garçon',article: 'un', redWord:'un garçon'},
    '../../assets/images/1to30/2/1.png', // Assuming this is a string path to an image
    [  
      { language: 'English', text: 'a boy' },
      { language: 'German', text: ' ein Junge' },
      { language: 'Spanish', text: 'un niño' },
      { language: 'Chinese', text: '一个男孩' },
      { language: 'Russian', text: 'мальчик' }
    ],
    '', // Transcription
    [], // Synonyms
    [], // Notes
    {sentence:"un garçon fait un gâteau",redWord: "un garçon"}, // Example 1
    '../../assets/images/1to30/2/2.png', // Path to image for example 1
    [
      { language: 'English', text: 'a boy makes a cake' },
      { language: 'German', text: 'ein Junge backt einen Kuchen' },
      { language: 'Spanish', text: 'un niño hace un pastel' },
      { language: 'Chinese', text: '一个男孩做蛋糕' },
      { language: 'Russian', text: 'мальчик печет торт' }
    ], // Translations for example 1
    {sentence:"un garçon joue au football", redWord:"un garçon"}, // Example 2
    '../../assets/images/1to30/2/3.png', // Path to image for example 2
    [
      { language: 'English', text: 'a boy plays football' },
      { language: 'German', text: ' ein Junge spielt Fußball' },
      { language: 'Spanish', text: 'un niño juega al fútbol' },
      { language: 'Chinese', text: '一个男孩踢足球' },
      { language: 'Russian', text: 'мальчик играет в футбол' }
    ], // Translations for example 2
    [], // Categories
    [] , // Level
    
  ),
  new Word(
    // ID
    3,  
  
    // Word, article, and highlighted word
    { word: 'homme', article: 'un', redWord: 'un homme' },
  
    // Assuming this is a string path to an image
    '../../assets/images/1to30/3/1.png', 
  
    // Translations
    [
      { language: 'English', text: 'a man' },
      { language: 'German', text: 'ein Mann' },
      { language: 'Spanish', text: 'un hombre' },
      { language: 'Chinese', text: '一个男人' },
      { language: 'Russian', text: 'мужчина' }
    ],
  
    // Transcription (empty string if not applicable)
    '', 
  
    // Synonyms (empty array if none)
    [], 
  
    // Notes (empty array if none)
    [], 
  
    // Example 1 with sentence and highlighted word
    { sentence: "un homme fait la vaisselle", redWord: "un homme" },
  
    // Path to image for example 1
    '../../assets/images/1to30/3/2.png', 
  
    // Translations for example 1
    [
      { language: 'English', text: 'a man washes dishes' },
      { language: 'German', text: 'ein Mann wäscht Geschirr' },
      { language: 'Spanish', text: 'un hombre lava los platos' },
      { language: 'Chinese', text: '一个男人洗碗' },
      { language: 'Russian', text: 'мужчина моет посуду' }
    ],
  
    // Example 2 with sentence and highlighted word
    { sentence: "un homme se brosse les cheveux", redWord: "un homme" },
  
    // Path to image for example 2
    '../../assets/images/1to30/3/3.png', 
  
    // Translations for example 2
    [
      { language: 'English', text: 'a man brushes his hair' },
      { language: 'German', text: 'ein Mann bürstet sein Haar' },
      { language: 'Spanish', text: 'un hombre se cepilla el pelo' },
      { language: 'Chinese', text: '一个男人梳头发' },
      { language: 'Russian', text: 'мужчина расчесывает волосы' }
    ],
  
    // Categories (empty array if none)
    [], 
  
    // Level (empty array if none)
    [] 
  ),
  new Word(
    // ID
    4,  
  
    // Word, article, and highlighted word
    { word: 'femme', article: 'une', redWord: 'une femme' },
  
    // Assuming this is a string path to an image
    '../../assets/images/1to30/4/1.png', 
  
    // Translations
    [
      { language: 'English', text: 'a woman' },
      { language: 'German', text: 'eine Frau' },
      { language: 'Spanish', text: 'una mujer' },
      { language: 'Chinese', text: '一个女人' },
      { language: 'Russian', text: 'женщина' }
    ],
  
    // Transcription (empty string if not applicable)
    '', 
  
    // Synonyms (empty array if none)
    [], 
  
    // Notes (empty array if none)
    [], 
  
    // Example 1 with sentence and highlighted word
    { sentence: "une femme achète des fraises", redWord: "une femme" },
  
    // Path to image for example 1
    '../../assets/images/1to30/4/2.png', 
  
    // Translations for example 1
    [
      { language: 'English', text: 'a woman is buying strawberries' },
      { language: 'German', text: 'eine Frau kauft Erdbeeren' },
      { language: 'Spanish', text: 'una mujer está comprando fresas' },
      { language: 'Chinese', text: '一个女人在买草莓' },
      { language: 'Russian', text: 'женщина покупает клубнику' }
    ],
  
    // Example 2 with sentence and highlighted word
    { sentence: "une femme boit du café", redWord: "une femme" },
  
    // Path to image for example 2
    '../../assets/images/1to30/4/3.png', 
  
    // Translations for example 2
    [
      { language: 'English', text: 'a woman is drinking coffee' },
      { language: 'German', text: 'eine Frau trinkt Kaffee' },
      { language: 'Spanish', text: 'una mujer está bebiendo café' },
      { language: 'Chinese', text: '一个女人在喝咖啡' },
      { language: 'Russian', text: 'женщина пьет кофе' }
    ],
  
    // Categories (empty array if none)
    [], 
  
    // Level (empty array if none)
    [] 
  ),
  new Word(
    // ID
    5,  
  
    // Word, article, and highlighted word
    { word: 'chat', article: 'un', redWord: 'un chat' },
  
    // Assuming this is a string path to an image
    '../../assets/images/1to30/5/1.png', 
  
    // Translations
    [
      { language: 'English', text: 'a cat' },
      { language: 'German', text: 'eine Katze' },
      { language: 'Spanish', text: 'un gato' },
      { language: 'Chinese', text: '一只猫' },
      { language: 'Russian', text: 'кошка' }
    ],
  
    // Transcription (empty string if not applicable)
    '', 
  
    // Synonyms (empty array if none)
    [], 
  
    // Notes (empty array if none)
    [], 
  
    // Example 1 with sentence and highlighted word
    { sentence: "un chat boit du lait", redWord: "un chat" },
  
    // Path to image for example 1
    '../../assets/images/1to30/5/2.png', 
  
    // Translations for example 1
    [
      { language: 'English', text: 'a cat is drinking milk' },
      { language: 'German', text: 'eine Katze trinkt Milch' },
      { language: 'Spanish', text: 'un gato está bebiendo leche' },
      { language: 'Chinese', text: '一只猫在喝牛奶' },
      { language: 'Russian', text: 'кошка пьет молоко' }
    ],
  
    // Example 2 with sentence and highlighted word
    { sentence: "un chat joue avec un chien", redWord: "un chat" },
  
    // Path to image for example 2
    '../../assets/images/1to30/5/3.png', 
  
    // Translations for example 2
    [
      { language: 'English', text: 'a cat is playing with a dog' },
      { language: 'German', text: 'eine Katze spielt mit einem Hund' },
      { language: 'Spanish', text: 'un gato está jugando con un perro' },
      { language: 'Chinese', text: '一只猫在和一只狗玩耍' },
      { language: 'Russian', text: 'кошка играет с собакой' }
    ],
  
    // Categories (empty array if none)
    [], 
  
    // Level (empty array if none)
    [] 
  ),
  new Word(
    // ID
    6,  
  
    // Word, article, and highlighted word
    { word: 'chien', article: 'un', redWord: 'un chien' },
  
    // Assuming this is a string path to an image
    '../../assets/images/1to30/6/1.png', 
  
    // Translations
    [
      { language: 'English', text: 'a dog' },
      { language: 'German', text: 'ein Hund' },
      { language: 'Spanish', text: 'un perro' },
      { language: 'Chinese', text: '狗' },
      { language: 'Russian', text: 'собака' }
    ],
  
    // Transcription (empty string if not applicable)
    '', 
  
    // Synonyms (empty array if none)
    [], 
  
    // Notes (empty array if none)
    [], 
  
    // Example 1 with sentence and highlighted word
    { sentence: "un chien est dans le jardin", redWord: "un chien" },
  
    // Path to image for example 1
    '../../assets/images/1to30/6/2.png', 
  
    // Translations for example 1
    [
      { language: 'English', text: 'a dog is in the garden' },
      { language: 'German', text: 'ein Hund ist im Garten' },
      { language: 'Spanish', text: 'un perro está en el jardín' },
      { language: 'Chinese', text: '狗在花园里' },
      { language: 'Russian', text: 'собака в саду' }
    ],
  
    // Example 2 with sentence and highlighted word
    { sentence: "un chien est sur la plage", redWord: "un chien" },
  
    // Path to image for example 2
    '../../assets/images/1to30/6/3.png', 
  
    // Translations for example 2
    [
      { language: 'English', text: 'a dog is on the beach' },
      { language: 'German', text: 'ein Hund ist am Strand' },
      { language: 'Spanish', text: 'un perro está en la playa' },
      { language: 'Chinese', text: '狗在沙滩上' },
      { language: 'Russian', text: 'собака на пляже' }
    ],
  
    // Categories (empty array if none)
    [], 
  
    // Level (empty array if none)
    [] 
  ),
  

  
  
  
  
   ]  
   this._words.next(words)
    return words;
  
   
 /*  this._words.next(words.map((word, index) => {
      word.id = index;
      return word;
    }));*/
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
