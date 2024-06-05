import React from 'react';
import { Icon, Content, ContentWrapper } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

export const IconInline: React.FunctionComponent = () => (
  <React.Fragment>
    <ContentWrapper>
      <Content component="h1">
        Heading
        <Icon isInline>
          <PlusCircleIcon />
        </Icon>
      </Content>
      <Content component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
      </Content>
      <Content component="h2">
        Second level
        <Icon isInline>
          <PlusCircleIcon />
        </Icon>
      </Content>
      <Content component="p">
        <Icon isInline>
          <PlusCircleIcon />
        </Icon>
        Curabitur accumsan turpis pharetra
        <strong>
          augue tincidunt
          <Icon isInline>
            <PlusCircleIcon />
          </Icon>
        </strong>
        blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus
        venenatis. Suspendisse potenti.
      </Content>
      <small>
        Sometimes you need small text
        <Icon isInline>
          <PlusCircleIcon />
        </Icon>
      </small>
      Inline with size specified:
      <Icon size="sm" isInline>
        <PlusCircleIcon />
      </Icon>
      small,
      <Icon size="md" isInline>
        <PlusCircleIcon />
      </Icon>
      medium,
      <Icon size="lg" isInline>
        <PlusCircleIcon />
      </Icon>
      large,
      <Icon size="xl" isInline>
        <PlusCircleIcon />
      </Icon>
      extra large
    </ContentWrapper>
  </React.Fragment>
);
