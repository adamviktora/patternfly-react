/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ContentList } from '../../ContentList';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ContentList should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<ContentList children={<>ReactNode</>} className={"''"} component={'ul'} />);
  expect(asFragment()).toMatchSnapshot();
});
