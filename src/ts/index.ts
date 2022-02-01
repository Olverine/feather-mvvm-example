import { registerPipe } from "feather-mvvm";
import "../style.scss"
import { GreeterViewModel } from "./GreeterViewModel";

document.addEventListener("DOMContentLoaded", event => {

    registerPipe("greet", (input:string) => {
        if(input === "") {
            return "Enter your name!";
        }

        return `Hello ${input}!`;
    });

    let greeterVM = new GreeterViewModel("greeter-vm");
    greeterVM.onInit();
});