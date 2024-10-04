"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopUp = void 0;
var colors_1 = require("./colors");
var PopUp = /** @class */ (function () {
    function PopUp() {
        this.BODY = document.getElementsByTagName('body')[0];
        this.backdrop = document.createElement('div');
    }
    PopUp.prototype.setPosition = function () {
        var _a;
        switch ((_a = this.properties) === null || _a === void 0 ? void 0 : _a.position) {
            case "center":
                return "align-items: center; justify-content: center;";
            case "top":
                return "align-items: flex-start; justify-content: center;";
            case "bottom":
                return "align-items: flex-end; justify-content: center;";
            case "left":
                return "align-items: center; justify-content: flex-start;";
            case "right":
                return "align-items: center; justify-content: flex-end;";
            case "top-right":
                return "align-items: flex-start; justify-content: flex-end;";
            case "bottom-right":
                return "align-items: flex-end; justify-content: flex-end;";
            case "top-left":
                return "align-items: flex-start; justify-content: flex-start;";
            case "bottom-left":
                return "align-items: flex-end; justify-content: flex-start;";
            default:
                return "align-items: center; justify-content: center;";
        }
    };
    PopUp.prototype.buildBackdrop = function () {
        var backdropStyles = "\n            width: calc(100vw - 2rem);\n            height: calc(100vh - 2rem);\n            z-index: 9999;\n            background-color: #1a1a1a59;\n            position: fixed;\n            top: 0px;\n            left: 0px;\n            display: flex;\n            padding: 1rem;\n            ".concat(this.setPosition(), "\n        ");
        this.backdrop.style.cssText = backdropStyles;
        var card = this.buildBaseCard();
        this.backdrop.appendChild(card);
        this.BODY.insertBefore(this.backdrop, this.BODY.firstChild);
    };
    PopUp.prototype.buildBaseCard = function () {
        var min_width = window.screen.width * 0.34;
        var min_heigth = min_width - (min_width * 0.34);
        var color = this.setColours();
        var cardStyles = "\n            min-width: ".concat(min_width, "px;\n            min-height: ").concat(min_heigth, "px;\n            border-radius: 15px;\n            background-color: #fefefe;\n            box-shadow: 0px 3px 10px 2px #1a1a1a50;\n            border-top: ").concat(color, " 1rem outset;\n        ");
        var card = document.createElement('div');
        card.style.cssText = cardStyles;
        return card;
    };
    PopUp.prototype.setColours = function () {
        if (this.properties.color) {
        }
        else
            switch (this.properties.type) {
                case ('success'): return colors_1.colors['grass'];
                case ('error'): return colors_1.colors['rose'];
                case ('info'): return colors_1.colors['delphinium'];
                case ('warning'): return colors_1.colors['daisy'];
                default: return colors_1.colors['lilac'];
            }
    };
    /**
     *
     * @param properties Propiedades necesarias para la funcionalidad de la página
     */
    PopUp.prototype.ready = function (properties) {
        try {
            if (!properties)
                throw new Error("TypeError:\n \n            Properties not set, undefined can't use to initialize");
            this.buildBackdrop();
        }
        catch (error) {
            console.error(error);
        }
    };
    return PopUp;
}());
exports.PopUp = PopUp;
