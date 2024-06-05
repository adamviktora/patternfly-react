import React from 'react';
import { ContentWrapper, Content, ContentVariants } from '@patternfly/react-core';

export const ContentWrapperWrapped: React.FunctionComponent = () => (
  <ContentWrapper>
    <Content component={ContentVariants.p}>
      Content with a component of type "p" still renders the same when wrapped with a ContentWrapper.
    </Content>
    <p>If located within a wrapping ContentWrapper, html elements are styled as well!</p>
    <h3>This h3 html element is also styled, because it is inside the ContentWrapper.</h3>
    <blockquote>And this blockquote too!</blockquote>
  </ContentWrapper>
);
