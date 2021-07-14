import './index';
import { withXD } from 'storybook-addon-xd-designs';

export default {
    title: 'Text Field',
    decorators: [withXD],
    parameters: {
        design: {
            artboardUrl:
        'https://xd.adobe.com/view/2a5a7401-925e-4fcc-9230-39d8e3c56729-7f09/screen/bd1931c3-ab16-4f62-9249-7be138831280/specs/'
        }
    }
};

const template = '<nimble-text-field>Text Field</nimble-text-field>';

export const textField = (): string => template;
