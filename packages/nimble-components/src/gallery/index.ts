import { FoundationElement } from '@microsoft/fast-foundation';

declare global {
    interface HTMLElementTagNameMap {
        'nimble-gallery': Gallery;
    }
}

/**
 * A nimble-styled WaferMap
 */
export class Gallery extends FoundationElement {
}