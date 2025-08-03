export type PopUpPosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

export type PopUpDefaultTypes = 'info' | 'success' | 'warning' | 'error';

export type PopUpIconPosition = 'left' | 'center' | 'right';

export interface BackdropProperties {
    onClick?: VoidFunction;
    show?: boolean;
    closeWhenClick?: boolean;
}

export interface Properties {
    type: PopUpDefaultTypes;
    position?: PopUpPosition;
    icon?: {
        position: PopUpIconPosition;
        icon_name?: string;
        library?: string;
        url?: string;
    };
    color?: string;
    title?: string;
    text?: string;
    backdrop?: BackdropProperties;
}