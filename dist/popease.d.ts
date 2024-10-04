export interface Properties {
    position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
    type: 'info' | 'success' | 'warning' | 'error';
    icon?: {
        position: 'left' | 'center' | 'right';
        icon_name?: string;
        library?: string;
        url?: string;
    };
    color?: string | 'rose' | 'delphinium' | 'daisy' | 'grass' | 'lilac';
    title?: string;
    text?: string;
}
export declare class PopUp {
    private BODY;
    private backdrop;
    properties: Properties;
    constructor();
    private setPosition;
    private buildBackdrop;
    private buildBaseCard;
    private setColours;
    /**
     *
     * @param properties Propiedades necesarias para la funcionalidad de la página
     */
    ready(properties?: Properties): void;
}
