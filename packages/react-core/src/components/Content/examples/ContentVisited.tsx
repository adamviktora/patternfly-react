import React from 'react';
import { ContentWrapper, Content, ContentVariants } from '@patternfly/react-core';

export const ContentVisited: React.FunctionComponent = () => (
  <>
    <ContentWrapper>
      <Content component={ContentVariants.h3}>Link example</Content>
      <Content component={ContentVariants.p}>
        <Content component={ContentVariants.a} isVisitedLink href="#">
          Click to visit link
        </Content>
      </Content>
    </ContentWrapper>
    <br />
    <ContentWrapper isVisited>
      <Content component={ContentVariants.h3}>Link content example</Content>
      <Content component={ContentVariants.p}>
        <Content component={ContentVariants.a} href="#">
          content link 1
        </Content>
      </Content>
      <Content component={ContentVariants.p}>
        <Content component={ContentVariants.a} href="#">
          content link 2
        </Content>
      </Content>
      <Content component={ContentVariants.p}>
        <Content component={ContentVariants.a} href="#">
          content link 3
        </Content>
      </Content>
    </ContentWrapper>
  </>
);
