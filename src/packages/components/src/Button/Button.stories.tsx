import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "hello",
  className: "m-3",
};

Primary.play = async ({ args, canvasElement }: any) => {
  const ButtonElem = within(canvasElement);
  userEvent.click(ButtonElem.getByRole("button"));
  expect(args.onClick).toHaveBeenCalled();
};
