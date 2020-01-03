import Link from './link.twig'
import { action } from "@storybook/addon-actions";

export default {
  title: "Link [twig]",
};

export const link = () => Link({
  link_content: 'This is my link text',
  link_url: '#'
});

export const moreLink = () => Link({
  link_content: 'This is a "more" link',
  link_url: '#'
});
