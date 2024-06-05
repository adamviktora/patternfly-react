import React from 'react';
import { ContentList, ContentListVariants, ContentListItem } from '@patternfly/react-core';

export const ContentOrderedList: React.FunctionComponent = () => (
  <ContentList component={ContentListVariants.ol}>
    <ContentListItem>Donec blandit a lorem id convallis.</ContentListItem>
    <ContentListItem>Cras gravida arcu at diam gravida gravida.</ContentListItem>
    <ContentListItem>Integer in volutpat libero.</ContentListItem>
    <ContentListItem>Donec a diam tellus.</ContentListItem>
    <ContentListItem>Aenean nec tortor orci.</ContentListItem>
    <ContentListItem>Quisque aliquam cursus urna, non bibendum massa viverra eget.</ContentListItem>
    <ContentListItem>Vivamus maximus ultricies pulvinar.</ContentListItem>
  </ContentList>
);
