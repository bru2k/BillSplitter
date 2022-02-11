'use strict';

let model, view;

const initialise = evt => {
    model = new Model();
    view = new View();
    
    view.registerKeyPadListeners();

    view.registerCountPadListeners(
        event => {
            // getting details for calculation from the view
            let count = event.currentTarget.value;
            let bill = view.getBill();
            let tipPercent = view.getChoiceTip().value;
            let rounding = view.getChoiceRound().value;

            // calculating the results to be desplayed in the details
            let split = model.getSplit(bill, count);
            let result = model.getResult(bill, tipPercent, count, rounding);
            let tip = result - split;
            let tipAsPercent = model.getTipAsPercent(split, tip);

            // displaying the result on the page
            view.updateResult(result);

            // displaying the details on the page
            view.updateDetails(`\u00A3${bill} split ${count} ways is \u00A3${split.toFixed(2)} each. Adding a tip and rounding to nearest £${rounding} gives £${result.toFixed(2)} each including a tip of £${tip.toFixed(2)} or ${tipAsPercent}% once rounded up.`);
        }
    );

    // save choice in the local storage every time a tip radio is checked
    view.registerTipListeners(
        event => {
            model.saveChoiceTip(view.getChoiceTip().id);
        }
    );

    // save choice in the local storage every time a rounding radio is checked
    view.registerRoundListeners(
        event => {
            model.saveChoiceRound(view.getChoiceRound().id);
        }
    );

    // setting the loaded choices
    view.setChoices(model.loadChoiceTip(), model.loadChoiceRound());

};

window.addEventListener("load", initialise);