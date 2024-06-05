import React from 'react';
import { Content, ContentVariants, ContentList, ContentListVariants, ContentListItem } from '@patternfly/react-core';

export const ContentPlainList: React.FunctionComponent = () => (
  <>
    <Content component={ContentVariants.h3}>Plain unordered list</Content>
    <ContentList isPlain>
      <ContentListItem>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</ContentListItem>
      <ContentListItem>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</ContentListItem>
      <ContentListItem>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</ContentListItem>
      <ContentListItem>Ut non enim metus.</ContentListItem>
    </ContentList>
    <Content component={ContentVariants.h3}>Plain ordered list</Content>
    <ContentList component={ContentListVariants.ol} isPlain>
      <ContentListItem>Donec blandit a lorem id convallis.</ContentListItem>
      <ContentListItem>Cras gravida arcu at diam gravida gravida.</ContentListItem>
      <ContentListItem>Integer in volutpat libero.</ContentListItem>
      <ContentListItem>Donec a diam tellus.</ContentListItem>
      <ContentListItem>Aenean nec tortor orci.</ContentListItem>
      <ContentListItem>Quisque aliquam cursus urna, non bibendum massa viverra eget.</ContentListItem>
      <ContentListItem>Vivamus maximus ultricies pulvinar.</ContentListItem>
    </ContentList>
  </>
);
