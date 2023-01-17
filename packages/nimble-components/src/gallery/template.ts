import {html, slotted} from '@microsoft/fast-element';
import type { Gallery } from '.';

export const template = html<Gallery>`
    <style>
        .gallery {
            width: ${x => x.galleryWidth}px;
        }
        slot[class='image']::slotted(*) {
            padding: ${x => x.imagePadding}px;
        }
    </style>
    
    <label class="gallery">
        <slot class="image" ${slotted('slottedNodes')}></slot>
    </label>
`;
