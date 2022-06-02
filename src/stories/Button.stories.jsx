import Button from "../components/Button";


export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Purple = Template.bind({})
Purple.args = {
  backgroundColor: "purple",
  label: "Press Me",
  size: "lg",
}

export const Pink = Template.bind({})
Pink.args = {
  backgroundColor: "pink",
  label: "Press Me",
  size: "lg",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me to write a long label",
  size: "md",
}