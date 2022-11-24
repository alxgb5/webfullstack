// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import theme from './ark-ui';

addons.setConfig({
    theme: theme,
});