import { colors } from "./colors";

export interface Properties {
    position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left',
    type: 'info' | 'success' | 'warning' | 'error',
    icon?: {
        position: 'left' | 'center' | 'right',
        icon_name?: string,
        library?: string,
        url?: string
    },
    color?: string | 'rose' | 'delphinium' | 'daisy' | 'grass' | 'lilac',
    title?: string,
    text?: string
}

export class PopUp {
    private BODY: HTMLBodyElement = document.getElementsByTagName('body')[0];
    private backdrop: HTMLDivElement = document.createElement('div');
    properties!: Properties;
    constructor() {

    }

    private setPosition() {
        switch (this.properties?.position) {
            case "center":
                return `align-items: center; justify-content: center;`;
            case "top":
                return `align-items: flex-start; justify-content: center;`;
            case "bottom":
                return `align-items: flex-end; justify-content: center;`;
            case "left":
                return `align-items: center; justify-content: flex-start;`;
            case "right":
                return `align-items: center; justify-content: flex-end;`;
            case "top-right":
                return `align-items: flex-start; justify-content: flex-end;`;
            case "bottom-right":
                return `align-items: flex-end; justify-content: flex-end;`;
            case "top-left":
                return `align-items: flex-start; justify-content: flex-start;`;
            case "bottom-left":
                return `align-items: flex-end; justify-content: flex-start;`;
            default:
                return `align-items: center; justify-content: center;`;
        }
    }

    private buildBackdrop() {
        const backdropStyles = `
            width: calc(100vw - 2rem);
            height: calc(100vh - 2rem);
            z-index: 9999;
            background-color: #1a1a1a59;
            position: fixed;
            top: 0px;
            left: 0px;
            display: flex;
            padding: 1rem;
            ${this.setPosition()}
        `;
        this.backdrop.style.cssText = backdropStyles;
        const card = this.buildBaseCard();
        this.backdrop.appendChild(card);
        this.BODY.insertBefore(this.backdrop, this.BODY.firstChild);
    }

    private buildBaseCard(): HTMLDivElement {
        const min_width = window.screen.width * 0.34;
        const min_heigth = min_width - (min_width * 0.34);
        const color = this.setColours();

        const cardStyles: string = `
            min-width: ${min_width}px;
            min-height: ${min_heigth}px;
            border-radius: 15px;
            background-color: #fefefe;
            box-shadow: 0px 3px 10px 2px #1a1a1a50;
            border-top: ${color} 1rem outset;
        `;
        const card: HTMLDivElement = document.createElement('div');
        card.style.cssText = cardStyles;
        return card;
    }

    private setColours() {
        if (this.properties.color) {

        }
        else switch (this.properties.type) {
            case ('success'): return colors['grass'];
            case ('error'): return colors['rose'];
            case ('info'): return colors['delphinium'];
            case ('warning'): return colors['daisy'];
            default: return colors['lilac'];
        }
    }

    /**
     * 
     * @param properties Propiedades necesarias para la funcionalidad de la página
     */
    public ready(properties?: Properties) {
        try {
            if (!properties) throw new Error(`TypeError:\n 
            Properties not set, undefined can't use to initialize`);
            this.buildBackdrop()
        } catch (error) {
            console.error(error);
        }
    }
}