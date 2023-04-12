import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from '.'

const meta: Meta<typeof Loader> = {
  component: Loader,
}

export default meta

type Story = StoryObj<typeof Loader>

export const Default: Story = {
  args: {
    message: 'Loading...',
  },
}
