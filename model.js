'use strict';

class Model{
    constructor() {
    }

    // returns the base split without considering the tip or rounding to the selected ammount
    getSplit(bill, count) {
        return Math.ceil((bill / count) * 100 ) / 100;
    }

    // returns the split considering the tip and rounding to the selected ammount
    getResult(bill, tipPercent, count, rounding) {
        return Math.ceil(bill * (1 + tipPercent / 100) / count / rounding) * rounding;
    }

    // returns the tip as percent of the base split value
    getTipAsPercent(split, tip) {
        return Math.ceil(tip / split * 100);
    }

    saveChoiceTip(choiceTip) {
        localStorage.choiceTip = choiceTip;
    }

    saveChoiceRound(choiceRound) {
        localStorage.choiceRound = choiceRound;
    }

    // returns the id of the tip radio button to be checked
    loadChoiceTip() {
        return localStorage.choiceTip;
    }

    // returns the id of the rounding radio button to be checked
    loadChoiceRound() {
        return localStorage.choiceRound;
    }

}