import {css, ElementStyles} from "@microsoft/fast-element";

export const styles = css`
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }
`;

export function getStyles(galleryWidth: any, imagePadding: any): ElementStyles {
    return css` 
      .gallery {
        display: flex;
        flex-wrap: wrap;
        width: ${galleryWidth}px;
      }
      slot[class='image']::slotted(*) {
        padding: ${imagePadding}px;
      }`
}

