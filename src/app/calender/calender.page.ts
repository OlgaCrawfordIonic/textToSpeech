import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TextToSpeech, TTSOptions } from '@capacitor-community/text-to-speech';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CalenderPage implements OnInit {
  calender=[
    { week: 'first week',
      text:'je peux parler français'},
    { week: 'second week',
      text:" Je vis sur une petite île. Quand le temps est chaud et ensoleillé, je prends un bus pour aller à la plage. Cela ne prend que cinq minutes. Le bus s'arrête près de chez moi et m'amène directement à la plage. Je nage dans la mer. Ensuite, je m'assois au café et je bois du café. Je regarde les enfants nager dans la mer et construire des châteaux de sable. Je marche sur un sable chaud. C'était une journée parfaite"},
      { week: 'third week',
      text:"Hier soir nous sommes allés au restaurant. Nous avons réservé une table pour huit heures. Quand nous sommes arrivés, le restaurant était plein et une bonne musique jouait. J'ai bu un verre de vin et j'ai écouté de la musique. Je connaissais très bien cette musique. C'était une chanson populaire des années 1980. J'ai eu mon plat préféré : des crevettes épicées"}, 
  
  {week:'forth week',
  text:  "sur une petite île. Pour aller à la plus grande ville la plus proche, Glasgow, je dois prendre un bus jusqu'au ferry. Ça prend 8 minutes. Ensuite, je dois prendre le ferry. Le ferry met 35 minutes. Ensuite, je dois prendre un train. Le train met 50 minutes. Quand je suis à Glasgow, je fais du shopping, je me promène dans un parc. Je pourrais déjeuner dans l'un des cafés agréables de Glasgow. C'est un très beau voyage. La seule difficulté que j'ai, c'est que le ferry peut être annulé lorsque la météo change soudainement."
},
{  week:'firth week',
text: "une fill,une fille va à l'école,une fille lit un livre,une fill, une fille va à l'école,une  fille lit un livre"}
  ];
  words=[ 
    {word: "par magie",
     translation: "by magic"}
  ]
  constructor() { }
  speak(text:string){
    console.log('Parle' + text);
    TextToSpeech.speak({
      pitch: 1.2,
    
      rate: 0.6,
      voice: 4,
      text: text
    });
  }
  ngOnInit() {
   
  }

}
