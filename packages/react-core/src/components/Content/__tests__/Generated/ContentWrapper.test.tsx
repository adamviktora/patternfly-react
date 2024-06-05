/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ContentWrapper } from '../../ContentWrapper';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ContentWrapper should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<ContentWrapper children={<>ReactNode</>} className={"''"} />);
  expect(asFragment()).toMatchSnapshot();
});
