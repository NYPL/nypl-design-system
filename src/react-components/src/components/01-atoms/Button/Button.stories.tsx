import * as React from 'react'

import Button from './Button'
import { action } from '@storybook/addon-actions'
import { ButtonTypes, ButtonIconPositions } from './ButtonTypes'

export default {
    title: 'Button',
    component: Button,
}

export const buttonFilledIcon = () => (
    <Button
        callback={action('clicked')}
        id="button"
        buttonType={ButtonTypes.Filled}
        type="submit"
        iconPosition={ButtonIconPositions.Left}
        iconName="search_small"
        iconDecorative={true}
    >
        Search
    </Button>
)

export const buttonOutline = () => (
    <Button
        callback={action('clicked')}
        id="button"
        type="submit"
        buttonType={ButtonTypes.Outline}
    >
        Hello World
    </Button>
)

export const buttonWithSpan = () => (
    <Button
        callback={action('clicked')}
        id="button"
        buttonType={ButtonTypes.Outline}
    >
        <span>Style my span!</span>
    </Button>
)

export const buttonIconChildrenString = () => (
    <Button
        callback={action('clicked')}
        id="button"
        buttonType={ButtonTypes.Filled}
        type="submit"
        iconPosition={ButtonIconPositions.Right}
        iconName="search_small"
        iconDecorative={true}
    >
        Search!
    </Button>
)

export const buttonIconChildrenElement = () => (
    <Button
        callback={action('clicked')}
        id="button"
        buttonType={ButtonTypes.Outline}
        type="button"
        iconPosition={ButtonIconPositions.Right}
        iconName="search_small"
        iconDecorative={true}
    >
        <span>I'm wrapped in a span!</span>
    </Button>
)

export const buttonFullWidthIconRight = () => (
    <Button
        callback={action('clicked')}
        id="button"
        type="submit"
        buttonType={ButtonTypes.Outline}
        iconPosition={ButtonIconPositions.JustifyRight}
        modifiers={['large']}
        iconName="plus"
        iconDecorative={true}
    >
        <span>button content</span>
    </Button>
)

export const linkLikeButton = () => (
    <Button
        callback={action['clicked']}
        id="button"
        type="button"
        buttonType={ButtonTypes.Link}
    >
        <span>button content</span>
    </Button>
)

export const linkLikeButtonIconLeft = () => (
    <Button
        callback={action['clicked']}
        id="button"
        type="button"
        buttonType={ButtonTypes.Link}
        iconPosition={ButtonIconPositions.Left}
        iconName="arrow_xsmall"
        iconDecorative={true}
    >
        <span>button content</span>
    </Button>
)
