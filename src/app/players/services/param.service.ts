import { Question } from "../models/question";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ParamService {
    questions: Question [] = [
        new Question( "Paris est capitale de la France ?", "Oui","Facile", "Geographie", true),
        new Question("X est champion du monde?",'Non',"Facile",'Sport', false),
    ]

    GetQuestions(){
        return this.questions;
    }

    SetQuestion( newQuestion: Question){
        this.questions.push(newQuestion);
        return this.questions;
    }

}
