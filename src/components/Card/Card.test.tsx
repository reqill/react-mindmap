import { render } from '@testing-library/react'
import { Card } from './'
import { cardTestId } from './card.constants'

describe('Card', () => {
  test('should render correctly without children', () => {
    const { getByTestId } = render(<Card />)

    const cardElement = getByTestId(cardTestId)

    expect(cardElement).toBeDefined()
  })

  test('should render correctly with children', () => {
    const children = <p data-testid="card-children">Card children</p>

    const { getByTestId } = render(<Card>{children}</Card>)

    const cardElement = getByTestId(cardTestId)
    const cardChildrenElement = getByTestId('card-children')

    expect(cardElement).toBeDefined()
    expect(cardChildrenElement).toBeDefined()
  })
})
