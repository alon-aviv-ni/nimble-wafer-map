import {DesignSystem, FoundationElement} from '@microsoft/fast-foundation';
import {template} from "./template";
import {styles} from "./styles";
import {attr, observable} from "@microsoft/fast-element";

declare global {
    interface HTMLElementTagNameMap {
        'nimble-gallery': Gallery;
    }
}

/**
 * A nimble-styled Gallery
 */
export class Gallery extends FoundationElement {
    @observable slottedNodes: Node[] | undefined;

    @attr({ attribute: 'gallery-width'})
    public galleryWidth?: number;

    @attr({ attribute: 'image-padding'})
    public imagePadding?: number;
}

const nimbleGallery = Gallery.compose({
    baseName: 'gallery',
    template,
    styles
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleGallery());