import { renderWithTheme } from '@/core/utils/tests/helpers'

import { Modal } from '.'

describe('<Modal />', () => {
  it('should render a modal', () => {
    const { getByLabelText } = renderWithTheme(<Modal open>Modal</Modal>)

    expect(getByLabelText('modal')).toBeInTheDocument()
  })
})
