import React from 'react';
import { ContentList, ContentListItem } from '@patternfly/react-core';

export const ContentUnorderedList: React.FunctionComponent = () => (
  <ContentList>
    <ContentListItem>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</ContentListItem>
    <ContentListItem>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</ContentListItem>
    <ContentListItem>
      Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
      <ContentList>
        <ContentListItem>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</ContentListItem>
        <ContentListItem>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</ContentListItem>
      </ContentList>
    </ContentListItem>
    <ContentListItem>Ut non enim metus.</ContentListItem>
  </ContentList>
);
