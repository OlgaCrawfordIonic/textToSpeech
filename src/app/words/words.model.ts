export class Word {
    constructor (
        public id?: number,
        public word?:{word:string, article:string, redWord:string},
        public pathToImage?: string,
        // Replace the simple string array with an array of objects
        public translations?: { language: string, text: string }[],
        public transcription?: string,
        public synonyms?: string[],
        public notes?: string[],
        public example1?: {sentence:string, redWord:string}, 
        public pathToImage1?: string,
        public translations1?: { language: string, text: string }[],
        public example2?:{sentence:string, redWord:string}, 
        public pathToImage2?: string,
        public translations2?: { language: string, text: string }[],
        public categories?: [],
        public level?: [],
    ) {}
        public date?: Date
}
