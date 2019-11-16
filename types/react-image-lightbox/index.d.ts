// Type definitions for react-image-lightbox 5.1.1
// Project: https://github.com/frontend-collective/react-image-lightbox
// Definitions by: Peter van Holland <https://github.com/cubabit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "react-image-lightbox" {
    import * as React from "react";

    interface Props {
        /**
         * Main display image url
         */
        mainSrc: string;
        /**
         * Previous display image url (displayed to the left). If left undefined, onMovePrevRequest will not be called, and the button not displayed
         */
        prevSrc?: string;
        /**
         * Next display image url (displayed to the right). If left undefined, onMoveNextRequest will not be called, and the button not displayed
         */
        nextSrc?: string;
        /**
         * Thumbnail image url corresponding to props.mainSrc. Displayed as a placeholder while the full-sized image loads.
         */
        mainSrcThumbnail?: string;
        /**
         * Thumbnail image url corresponding to props.prevSrc. Displayed as a placeholder while the full-sized image loads.
         */
        prevSrcThumbnail?: string;
        /**
         * Thumbnail image url corresponding to props.nextSrc. Displayed as a placeholder while the full-sized image loads.
         */
        nextSrcThumbnail?: string;
        /**
         * Close window event. Should change the parent state such that the lightbox is not rendered
         */
        onCloseRequest(): void;
        /**
         * Move to previous image event. Should change the parent state such that props.prevSrc becomes props.mainSrc, props.mainSrc becomes props.nextSrc, etc.
         */
        onMovePrevRequest?(): void;
        /**
         * Move to next image event. Should change the parent state such that props.nextSrc becomes props.mainSrc, props.mainSrc becomes props.prevSrc, etc.
         */
        onMoveNextRequest?(): void;
        /**
         * Called when an image loads.
         */
        onImageLoad?(imageSrc: string, srcType: string, image: object): void;
        /**
         * Called when an image fails to load.
         */
        onImageLoadError?(): void;
        /**
         * What is rendered in place of an image if it fails to load. Centered in the lightbox viewport. Defaults to the string "This image failed to load".
         */
        imageLoadErrorMessage?: JSX.Element;
        /**
         * Called after the modal has rendered.
         */
        onAfterOpen?(): void;
        /**
         * When true, enables download discouragement (preventing [right-click -> Save Image As...]). Defaults to false.
         */
        discourageDownloads?: boolean;
        /**
         * When true, image sliding animations are disabled. Defaults to false.
         */
        animationDisabled?: boolean;
        /**
         * When true, sliding animations are enabled on actions performed with keyboard shortcuts. Defaults to false.
         */
        animationOnKeyInput?: boolean;
        /**
         * Animation duration (ms). Defaults to 300.
         */
        animationDuration?: number;
        /**
         * Required interval of time (ms) between key actions (prevents excessively fast navigation of images). Defaults to 180.
         */
        keyRepeatLimit?: number;
        /**
         * Amount of time (ms) restored after each keyup (makes rapid key presses slightly faster than holding down the key to navigate images). Defaults to 40.
         */
        keyRepeatKeyupBonus?: number;
        /**
         * Image title (Descriptive element above image)
         */
        imageTitle?: JSX.Element;
        /**
         * Image caption (Descriptive element below image)
         */
        imageCaption?: JSX.Element;
        /**
         * crossorigin attribute to append to img elements (MDN documentation)
         */
        imageCrossOrigin?: string;
        /**
         * Array of custom toolbar buttons
         */
        toolbarButtons?: JSX.Element[];
        /**
         * Set z-index style, etc., for the parent react-modal (react-modal style format)
         */
        reactModalStyle?: object;
        /**
         * Override props set on react-modal (https://github.com/reactjs/react-modal)
         */
        reactModalProps?: object;
        /**
         * Padding (px) between the edge of the window and the lightbox. Defaults to 10.
         */
        imagePadding?: number;
        /**
         * When true, clicks outside of the image close the lightbox. Defaults to true.
         */
        clickOutsideToClose?: boolean;
        /**
         * Set to false to disable zoom functionality and hide zoom buttons. Defaults to true.
         */
        enableZoom?: boolean;
        /**
         * Class name which will be applied to root element after React Modal
         */
        wrapperClassName?: string;
        /**
         * aria-label set on the 'Next' button. Defaults to 'Next image'.
         */
        nextLabel?: string;
        /**
         * aria-label set on the 'Previous' button. Defaults to 'Previous image'.
         */
        prevLabel?: string;
        /**
         * aria-label set on the 'Zoom In' button. Defaults to 'Zoom in'.
         */
        zoomInLabel?: string;
        /**
         * aria-label set on the 'Zoom Out' button. Defaults to 'Zoom out'.
         */
        zoomOutLabel?: string;
        /**
         * aria-label set on the 'Close Lightbox' button. Defaults to 'Close lightbox'.
         */
        closeLabel?: string;
    }

    class Lightbox extends React.Component<Props> {}

    export = Lightbox;
}
