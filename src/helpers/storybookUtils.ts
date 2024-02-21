/**
 * For usage in Storybook stories to set the default value of a boolean prop.
 */
export const argsBooleanType = (defaultValue = false) => ({
  control: { type: "boolean" },
  table: { defaultValue: { summary: defaultValue } },
});
