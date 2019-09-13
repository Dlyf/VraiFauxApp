
export class Question {
    question: string ='';
    response: string = '';
    level: string = "";
    category: string = ""

    constructor( question: string, response: string, level: string, category : string) {
        this.question = question;
        this.response = response;
        this.level = level;
        this.category = category;

    }
}
