import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import { focusVisible } from '../utilities/style/focus';

import {
    borderColor,
    borderHoverColor,
    borderRgbPartialColor,
    bodyFontColor,
    bodyDisabledFontColor,
    controlHeight,
    iconSize,
    borderWidth,
    smallDelay,
    buttonLabelFont
} from '../theme-provider/design-tokens';

export const styles = css`
    ${display('inline-flex')}

    :host {
        font: ${buttonLabelFont};
        align-items: center;
        cursor: pointer;
        outline: none;
        user-select: none;
    }

    :host([disabled]) {
        cursor: default;
    }

    .control {
        width: calc(${controlHeight} / 2);
        height: calc(${controlHeight} / 2);
        box-sizing: border-box;
        flex-shrink: 0;
        border: ${borderWidth} solid ${borderColor};
        padding: 2px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: box-shadow ${smallDelay};
        ${
            /*
             * Firefox includes the line height in the outline height calculation (not sure if intended or accidental).
             * Set it to 0 to ensure the outline is just as high as the control.
             */ ''
        }
        line-height: 0;
    }

    @media (prefers-reduced-motion) {
        .control {
            transition-duration: 0s;
        }
    }

    :host([disabled]) .control {
        background-color: rgba(${borderRgbPartialColor}, 0.1);
        border-color: rgba(${borderRgbPartialColor}, 0.2);
    }

    :host(:not([disabled]):not(:active):hover) .control {
        border-color: ${borderHoverColor};
        box-shadow: 0px 0px 0px ${borderWidth} ${borderHoverColor} inset;
    }

    :host(${focusVisible}) .control {
        border-color: ${borderHoverColor};
        outline: 2px solid ${borderHoverColor};
        outline-offset: 1px;
    }

    .label {
        font: inherit;
        color: ${bodyFontColor};
        padding-left: 1ch;
        cursor: inherit;
    }

    :host([disabled]) .label {
        color: ${bodyDisabledFontColor};
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
        display: none;
    }

    slot[name='checked-indicator'] svg {
        height: ${iconSize};
        width: ${iconSize};
        overflow: visible;
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'] {
        display: contents;
    }

    slot[name='checked-indicator'] path {
        fill: ${borderColor};
    }

    :host([disabled]) slot[name='checked-indicator'] path {
        fill: rgba(${borderRgbPartialColor}, 0.3);
    }

    slot[name='indeterminate-indicator'] svg {
        height: ${iconSize};
        width: ${iconSize};
        overflow: visible;
    }

    :host(.indeterminate) slot[name='indeterminate-indicator'] {
        display: contents;
    }

    slot[name='indeterminate-indicator'] path {
        fill: ${borderColor};
    }

    :host([disabled]) slot[name='indeterminate-indicator'] path {
        fill: rgba(${borderRgbPartialColor}, 0.3);
    }
`;
