import {DesignSystem, FoundationElement} from '@microsoft/fast-foundation';
import {template} from "./template";
import {styles} from "./styles";

declare global {
    interface HTMLElementTagNameMap {
        'nimble-gallery': Gallery;
    }
}

/**
 * A nimble-styled Gallery
 */
export class Gallery extends FoundationElement {
}

const nimbleGallery = Gallery.compose({
    baseName: 'gallery',
    template,
    styles
});

DesignSystem.getOrCreate().withPrefix('nimble').register(nimbleGallery());