import React from 'react';
import { ContentList, ContentListVariants, ContentListItem, ContentListItemVariants } from '@patternfly/react-core';

export const ContentDescriptionList: React.FunctionComponent = () => (
  <ContentList component={ContentListVariants.dl}>
    <ContentListItem component={ContentListItemVariants.dt}>Web</ContentListItem>
    <ContentListItem component={ContentListItemVariants.dd}>
      The part of the Internet that contains websites and web pages
    </ContentListItem>
    <ContentListItem component={ContentListItemVariants.dt}>HTML</ContentListItem>
    <ContentListItem component={ContentListItemVariants.dd}>A markup language for creating web pages</ContentListItem>
    <ContentListItem component={ContentListItemVariants.dt}>CSS</ContentListItem>
    <ContentListItem component={ContentListItemVariants.dd}>A technology to make HTML look better</ContentListItem>
  </ContentList>
);
