import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ContentWrapper } from '../ContentWrapper';
import styles from '@patternfly/react-styles/css/components/Content/content';

test('Renders without children', () => {
  render(
    <div data-testid="test-content">
      <ContentWrapper />
    </div>
  );
  expect(screen.getByTestId('test-content').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<ContentWrapper>Test</ContentWrapper>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with class name ${styles.content}`, () => {
  render(<ContentWrapper>Test</ContentWrapper>);
  expect(screen.getByText('Test')).toHaveClass(styles.content, { exact: true });
});

test('Renders with custom class name when className prop is provided', () => {
  render(<ContentWrapper className="custom-class">Test</ContentWrapper>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders without class name pf-m-visited by default', () => {
  render(<ContentWrapper>Test</ContentWrapper>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-visited');
});

test('Renders with class name pf-m-visited when isVisited=true', () => {
  render(<ContentWrapper isVisited={true}>Test</ContentWrapper>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-visited');
});

test('Renders with inherited element props spread to the component', () => {
  render(<ContentWrapper aria-label="Test label">Test</ContentWrapper>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<ContentWrapper>Test</ContentWrapper>);
  expect(asFragment()).toMatchSnapshot();
});
