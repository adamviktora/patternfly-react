import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ContentListItem } from '../ContentListItem';

test('Renders without children', () => {
  render(
    <div data-testid="test-list-item">
      <ContentListItem />
    </div>
  );
  expect(screen.getByTestId('test-list-item').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<ContentListItem>Test</ContentListItem>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<ContentListItem className="custom-class">Test</ContentListItem>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders as "li" element by default', () => {
  render(<ContentListItem>Test</ContentListItem>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'LI');
});

test('Renders as "dt" element when component="dt"', () => {
  render(<ContentListItem component="dt">Test</ContentListItem>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DT');
});

test('Renders as "dd" element when component="dd"', () => {
  render(<ContentListItem component="dd">Test</ContentListItem>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DD');
});

test('Renders with inherited element props spread to the component', () => {
  render(<ContentListItem aria-label="Test label">Test</ContentListItem>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<ContentListItem>Test</ContentListItem>);
  expect(asFragment()).toMatchSnapshot();
});
