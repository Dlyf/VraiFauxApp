import { Component, OnInit } from "@angular/core";
import { Player } from "../players/models/player";
import { Question } from "../players/models/question";


@Component({
    selector: 'question-list',
    templateUrl: './question-list.component.html',

})
export class QuestionListComponent implements OnInit {
// message: string = 'Simple message';

    test = 'Changement de Texte';

    onChange(): void {
        this.test = 'Vrai ';
    }

    public questions: Question[] = [];
    public player: Player;

    constructor() {

    }

    ngOnInit() {

    }



}
