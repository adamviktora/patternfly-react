import React from 'react';
import { AboutModal, Button, ContentList, ContentListItem, ContentWrapper } from '@patternfly/react-core';
import brandImg from '../../assets/PF-IconLogo.svg';

export const AboutModalWithoutProductName: React.FunctionComponent = () => {
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
        aria-label="No product name about modal"
      >
        <ContentWrapper>
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
