import { CloseButton } from "../../closeButton"
import "./style.css"

export function WidgetForm () {
    return(
        <div className="widgetFormContainer">
            <header>
                <CloseButton />
                <span className="titleHeader">Deixe seu feedback</span>
            </header>
            <p>Hello World</p>
            <footer className="widgetFormFooter">
                Feito com ♥︎ pela <a className="linkWidget" href="https://Rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}