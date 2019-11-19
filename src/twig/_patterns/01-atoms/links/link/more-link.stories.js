import MoreLink from './more-link.twig'
import { action } from "@storybook/addon-actions";

export default {
  title: "More Link [twig]",
};

export const moreLink = () => MoreLink({
  link_content: 'This is a "more" link',
  link_url: '#'
});
