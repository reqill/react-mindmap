import { FC, PropsWithChildren } from 'react'
import '../../styles/global.css'
import { cardTestId } from './card.constants'

export const Card: FC<PropsWithChildren> = ({ children }) => (
  <div
    data-testid={cardTestId}
    className="px-4 py-3 bg-white shadow-md border-gray-300 border-2 rounded-md"
  >
    {children}
  </div>
)
