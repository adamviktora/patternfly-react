import React from 'react';
import { AboutModal, Button, ContentList, ContentListItem, ContentWrapper } from '@patternfly/react-core';
const brandImg = '../../../assets/images/brandImg.svg';

interface AboutModalState {
  isModalOpen: boolean;
}

export class AboutModalDemo extends React.Component<{}, AboutModalState> {
  static displayName = 'AboutModalDemo';
  constructor(props: {}) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  handleModalToggle = (_event: React.MouseEvent) => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen
    }));
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button id="modal-button" variant="primary" onClick={this.handleModalToggle}>
          Show About Modal
        </Button>
        <AboutModal
          isOpen={isModalOpen}
          onClose={(event: any) => this.handleModalToggle(event)}
          trademark="Trademark and copyright information here"
          brandImageSrc={brandImg}
          brandImageAlt="Patternfly Logo"
          productName="Product Name"
        >
          <ContentWrapper>
            <ContentList component="dl">
              <ContentListItem component="dt">CFME Version</ContentListItem>
              <ContentListItem component="dd">5.5.3.4.20102789036450</ContentListItem>
              <ContentListItem component="dt">Cloudforms Version</ContentListItem>
              <ContentListItem component="dd">4.1</ContentListItem>
              <ContentListItem component="dt">Server Name</ContentListItem>
              <ContentListItem component="dd">40DemoMaster</ContentListItem>
              <ContentListItem component="dt">User Name</ContentListItem>
              <ContentListItem component="dd">Administrator</ContentListItem>
              <ContentListItem component="dt">User Role</ContentListItem>
              <ContentListItem component="dd">EvmRole-super_administrator</ContentListItem>
              <ContentListItem component="dt">Browser Version</ContentListItem>
              <ContentListItem component="dd">601.2</ContentListItem>
              <ContentListItem component="dt">Browser OS</ContentListItem>
              <ContentListItem component="dd">Mac</ContentListItem>
            </ContentList>
          </ContentWrapper>
        </AboutModal>
      </React.Fragment>
    );
  }
}
