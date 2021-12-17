import "./style/main.scss";
import "./style/component/calculatrice.scss";

const buttons = document.querySelectorAll(".button") as NodeListOf<Element>;
const screen = document.querySelector("#result") as HTMLElement;

let first: boolean = true;

for(let button of buttons){
    button.addEventListener("click", () => {
        if(first){
            screen.innerHTML = "";
            first = false;
        }
        if(button.innerHTML !== "="){
            screen.innerHTML += button.innerHTML;
        }
        else{
            if(button.innerHTML === "="){
                if(screen.innerHTML !== ""){
                    screen.innerHTML = Function("return " + screen.innerHTML)();
                    first = true;
                }
            }
        }
    })
}