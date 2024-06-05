import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ContentList } from '../ContentList';

test('Renders without children', () => {
  render(
    <div data-testid="test-list">
      <ContentList />
    </div>
  );
  expect(screen.getByTestId('test-list').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<ContentList>Test</ContentList>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<ContentList className="custom-class">Test</ContentList>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders as "ul" element by default', () => {
  render(<ContentList>Test</ContentList>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'UL');
});

test('Renders as "ol" element when component="ol"', () => {
  render(<ContentList component="ol">Test</ContentList>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'OL');
});

test('Renders as "dl" element when component="dl"', () => {
  render(<ContentList component="dl">Test</ContentList>);
  expect(screen.getByText('Test')).toHaveProperty('nodeName', 'DL');
});

test('Renders with plain modifier class when isPlain is set to true', () => {
  render(<ContentList isPlain>Test</ContentList>);
  expect(screen.getByRole('list')).toHaveClass('pf-m-plain');
});

test('Renders with inherited element props spread to the component', () => {
  render(<ContentList aria-label="Test label">Test</ContentList>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<ContentList>Test</ContentList>);
  expect(asFragment()).toMatchSnapshot();
});
