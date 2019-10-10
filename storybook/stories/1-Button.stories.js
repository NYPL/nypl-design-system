import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// import { PencilIcon, SearchIcon } from '@nypl/dgx-svg-icons';

import Button from '../../src/react-components/Button';

const button = storiesOf('Components/Button', module)
  .add('with different styles', () => {
    return [
      <Button
        callback={action('clicked')}
        content="Default"
      />,
      <Button
        callback={action('clicked')}
        content="Danger"
        className="danger"
      />,
      <Button
        callback={action('clicked')}
        content="Success"
        className="success"
      />,
      <Button
        callback={action('clicked')}
        content="Inverted"
        className="inverted"
      />,
      <Button
        callback={action('clicked')}
        content="Squared"
        className="squared"
      />,
      <Button
        callback={action('clicked')}
        content="Bottom-Squared"
        className="bottom-squared"
      />,
      <Button
        callback={action('clicked')}
        content="Small"
        className="small"
      />,
      <Button
        callback={action('clicked')}
        content="Big"
        className="big"
      />,
      <Button
        callback={action('clicked')}
        content="Transparent"
        className="transparent"
      />,
      <Button
        callback={action('clicked')}
        content="Disabled"
        disabled={true}
      />
    ];
  })
  .add('with different placement', () => {
    return [
      <div className="button-placement">
        <div className="button-container">
          <Button
            callback={action('clicked')}
            content="Left-Align"
            className="left-align"
          />
        </div>
        <div className="button-container">
          <Button
            callback={action('clicked')}
            content="Right-Align"
            className="right-align"
          />
        </div>
        <div className="button-container">
          <Button
            callback={action('clicked')}
            content="Top-Align"
            className="top-align"
          />
        </div>
        <div className="button-container">
          <Button
            callback={action('clicked')}
            content="Bottom-Align"
            className="bottom-align"
          />
        </div>
        <div className="button-container">
          <Button
            callback={action('clicked')}
            content="Inline"
            className="inline"
          />
        </div>
        <div className="button-container">
          <Button
            callback={action('clicked')}
            content="Centered"
            className="centered"
          />
        </div>
      </div>
    ];
  })
  .add('with icon', () => {
    return [
      <Button
        callback={action('clicked')}
        // content={<span>Edit <PencilIcon /></span>}
        content={<span>Edit</span>}
      />,
      <Button
        callback={action('clicked')}
        className="inverted"
        // content={<span>Search <SearchIcon /></span>}
        content={<span>Search</span>}
        />
    ];
  })
  .add('with custom text', () => {
    return [
      <Button
        callback={action('clicked')}
      />,
      <Button
        callback={action('clicked')}
        content={text('content', 'Custom text')}
      />
    ];
  })
  .add('with aria attributes', () => {
    return [
      <span>
        This button contains many aria-attributes just as examples:
        <Button
          className="inverted left-align"
          callback={action('clicked')}
          content={text('Aria-*')}
          aria-selected={true}
          aria-label='Aria Label Attribute'
          aria-expanded={true}
          aria-pressed={true}
        />
      </span>
    ]
  });

export default button;
