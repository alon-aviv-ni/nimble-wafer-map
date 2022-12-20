import { html } from '@microsoft/fast-element';
import type { Meta, StoryObj } from '@storybook/html';
import { withXD } from 'storybook-addon-xd-designs';
import { createUserSelectedThemeStory } from '../../utilities/tests/storybook';
import '../../all-components';
import {bodyFont} from "../../theme-provider/design-tokens";

interface GalleryArgs {
}

const metadata: Meta<GalleryArgs> = {
    title: 'Gallery',
    decorators: [withXD],
    parameters: {
        docs: {
            description: {
                component:
                    ''
            }
        }
    },
    render: createUserSelectedThemeStory(html`
        <div id="usage-warning">
            WARNING - The gallery is still in development and considered
            experimental. It is not recommended for application use.
        </div>
        <nimble-gallery>Hi</nimble-gallery>
        <style class="code-hide">
            #usage-warning {
                color: red;
                font: var(${bodyFont.cssCustomProperty});
            }
        </style>
    `)
};

export default metadata;

export const gallery: StoryObj<GalleryArgs> = {};
