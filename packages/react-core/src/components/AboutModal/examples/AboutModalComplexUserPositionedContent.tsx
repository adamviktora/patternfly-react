import React from 'react';
import { AboutModal, Alert, Button, ContentList, ContentListItem, ContentWrapper } from '@patternfly/react-core';
import brandImg from '../../assets/PF-IconLogo.svg';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

export const AboutModalComplexUserPositionedContent: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = (_event: React.MouseEvent<Element, MouseEvent> | KeyboardEvent | MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={toggleModal}>
        Show about modal
      </Button>
      <AboutModal
        isOpen={isModalOpen}
        onClose={(e: React.MouseEvent<Element, MouseEvent> | KeyboardEvent | MouseEvent) => toggleModal(e)}
        trademark="Trademark and copyright information here"
        brandImageSrc={brandImg}
        brandImageAlt="Patternfly Logo"
        backgroundImageSrc="/assets/images/pf-background.svg"
        hasNoContentContainer={true}
        productName="Product name"
      >
        <ContentWrapper id="test1" className={spacing.pyXl}>
          <h4>About</h4>
          <p>Content here</p>
        </ContentWrapper>
        <Alert variant="info" title="Updates available" />
        <ContentWrapper id="test2" className={spacing.pyXl}>
          <ContentList component="dl">
            <ContentListItem component="dt">CFME version</ContentListItem>
            <ContentListItem component="dd">5.5.3.4.20102789036450</ContentListItem>
            <ContentListItem component="dt">Cloudforms version</ContentListItem>
            <ContentListItem component="dd">4.1</ContentListItem>
            <ContentListItem component="dt">Server name</ContentListItem>
            <ContentListItem component="dd">40DemoMaster</ContentListItem>
            <ContentListItem component="dt">User name</ContentListItem>
            <ContentListItem component="dd">Administrator</ContentListItem>
            <ContentListItem component="dt">User role</ContentListItem>
            <ContentListItem component="dd">EvmRole-super_administrator</ContentListItem>
            <ContentListItem component="dt">Browser version</ContentListItem>
            <ContentListItem component="dd">601.2</ContentListItem>
            <ContentListItem component="dt">Browser OS</ContentListItem>
            <ContentListItem component="dd">Mac</ContentListItem>
          </ContentList>
        </ContentWrapper>
      </AboutModal>
    </React.Fragment>
  );
};
