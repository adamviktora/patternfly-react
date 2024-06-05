import React from 'react';
import { Spinner, Content, ContentWrapper } from '@patternfly/react-core';

export const SpinnerInline: React.FunctionComponent = () => (
  <React.Fragment>
    <ContentWrapper>
      <Content component="h1">
        Heading
        <Spinner isInline aria-label="Spinner in a heading" />
      </Content>
      <Content component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
      </Content>
      <Content component="h2">
        Second level
        <Spinner isInline aria-label="spinner in a subheading" />
      </Content>
      <Content component="p">
        Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi,{' '}
        <Spinner isInline aria-label="Spinner in a paragraph" /> sit amet commodo arcu rutrum id. Proin pretium urna vel
        cursus venenatis. Suspendisse potenti.
      </Content>
      <small>
        Sometimes you need small text
        <Spinner isInline aria-label="Spinner in a small element" />
      </small>
    </ContentWrapper>
  </React.Fragment>
);
