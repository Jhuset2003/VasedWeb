import Input from "../components/Input";


export default {
  title: "Components/Input",
  component: Input,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Input {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "none",
  label: "Press Me",
  size: "md",
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "none",
  label: "Press Me",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "none",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "none",
  label: "Press Me",
  size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "none",
  label: "Press Me to write a long label",
  size: "md",
}