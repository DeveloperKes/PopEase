import { Properties } from "../interfaces/global";
import { colors } from "../utils";

type CardStyles = (min_width: number, min_heigth: number, color: string) => string;

export class Card {
    private readonly properties: Properties;

    constructor(props: Properties) {
        this.properties = props;
    }


    private setColours() {
        if (this.properties?.color) {
            return this.properties.color;
        }
        else switch (this.properties?.type) {
            case ('success'): return `var(--popease-success, ${colors['grass']})`;
            case ('error'): return colors['rose'];
            case ('info'): return colors['delphinium'];
            case ('warning'): return colors['daisy'];
            default: return colors['lilac'];
        }
    }


    public buildBaseCard(): HTMLDialogElement {
        const min_width = window.screen.width * 0.24;
        const min_heigth = min_width - (min_width * 0.34);
        const color = this.setColours();
        const card: HTMLDialogElement = document.createElement('dialog');
        card.style.cssText = Styles.card(min_width, min_heigth, color);
        return card;
    }
}


const Styles: Record<string, CardStyles> = {
    card: (min_width: number, min_heigth: number, color: string) => {
        return `
        all: unset;
        box-sizing: border-box;
        min-width: ${min_width}px;
        min-height: ${min_heigth}px;
        border-radius: 8px;
        background-color: #fefefe;
        box-shadow: 0px 3px 10px 2px #1a1a1a50;
        border-top: ${color} 16px outset;
        display: flex;
        position: absolute; 
    `}
}