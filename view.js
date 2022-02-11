'use strict';

class View {
    constructor() {
    }

    registerKeyPadListeners() {
        for (let i = 0; i <= 9; i++) {
            document.getElementById("k" + i).addEventListener(
                "click",
                event=>{
                    if(document.getElementById("bill").value.length < 12) {
                        // appending numbers to the bill screen
                        document.getElementById("bill").value += i;  
                    }
                }
            )
        }
        
        document.getElementById("kc").addEventListener(
            "click",
            event=>{
                // clearing the bill screen
                document.getElementById("bill").value = "";
            }
        )
        
        document.getElementById("kd").addEventListener(
            "click",
            event=>{
                let bill = document.getElementById("bill").value;
                // deleting last number from the bill screen
                document.getElementById("bill").value = bill.substring(0, bill.length - 1);
            }
        )
    }

    registerCountPadListeners(listener) {
        for (let i = 2; i <= 5; i++) {
            document.getElementById("c" + i).addEventListener(
                "click",
                listener
            )
        }
    }

    registerTipListeners(listener) {
        for (let i = 0; i <= 4; i++) {
            document.getElementById("t" + i).addEventListener(
                "click",
                listener
            )
        }
    }

    registerRoundListeners(listener) {
        for (let i = 0; i <= 3; i++) {
            document.getElementById("r" + i).addEventListener(
                "click",
                listener
            )
        }
    }

    getBill() {
        return Number(document.getElementById("bill").value);
    }

    getChoiceTip() {
        return document.querySelector('input[name="tip"]:checked');
    }

    getChoiceRound() {
        return document.querySelector('input[name="round"]:checked');
    }

    updateResult(text) {
        document.getElementById("result").value = text;
    }

    updateDetails(text) {
        document.getElementById("details").textContent = text;
    }

    setChoices(choiceTip, choiceRound) {
        // set choices if input is not null
        if(!!choiceTip) {
            document.getElementById(choiceTip).checked = true;
        }
        if(!!choiceRound) {
            document.getElementById(choiceRound).checked = true;
        }
    }
}