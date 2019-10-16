import React from 'react';
import { action } from '@storybook/addon-actions';
import Button  from '../components/Button';

export default {
  title: 'Button',
};

export const filled = () => <Button classname="button" onClick={action('clicked')}></Button>;

export const outline = () => (
  <Button className="button button--outline" onClick={action('clicked')}>
  </Button>
);
