import { render, screen } from '@testing-library/react'
import { Message } from './message'

describe('Message', () => {
  it('renders a user message with content and avatar', () => {
    render(
      <Message
        author="user"
        content="Hello"
        avatar="U"
      />
    )

    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('U')).toBeInTheDocument()
  })

  it('renders an assistant message with content and avatar', () => {
    render(
      <Message
        author="assistant"
        content="Hi there"
        avatar="A"
      />
    )

    expect(screen.getByText('Hi there')).toBeInTheDocument()
    expect(screen.getByText('A')).toBeInTheDocument()
  })
})
