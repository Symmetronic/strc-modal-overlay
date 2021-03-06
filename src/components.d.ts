/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StrcModalOverlay {
        /**
          * The height to start animating from.
         */
        "height": number;
        /**
          * The left position to start animating from
         */
        "left": number;
        /**
          * The top position to start animating from.
         */
        "top": number;
        /**
          * The width to start animating from.
         */
        "width": number;
    }
}
declare global {
    interface HTMLStrcModalOverlayElement extends Components.StrcModalOverlay, HTMLStencilElement {
    }
    var HTMLStrcModalOverlayElement: {
        prototype: HTMLStrcModalOverlayElement;
        new (): HTMLStrcModalOverlayElement;
    };
    interface HTMLElementTagNameMap {
        "strc-modal-overlay": HTMLStrcModalOverlayElement;
    }
}
declare namespace LocalJSX {
    interface StrcModalOverlay {
        /**
          * The height to start animating from.
         */
        "height"?: number;
        /**
          * The left position to start animating from
         */
        "left"?: number;
        /**
          * Emits an event, when the overlay is closed.
         */
        "onClose"?: (event: CustomEvent<void>) => void;
        /**
          * The top position to start animating from.
         */
        "top"?: number;
        /**
          * The width to start animating from.
         */
        "width"?: number;
    }
    interface IntrinsicElements {
        "strc-modal-overlay": StrcModalOverlay;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "strc-modal-overlay": LocalJSX.StrcModalOverlay & JSXBase.HTMLAttributes<HTMLStrcModalOverlayElement>;
        }
    }
}
