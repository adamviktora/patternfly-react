import React from 'react';
import {
  Button,
  ButtonVariant,
  Content,
  ContentWrapper,
  DataList,
  DataListAction,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup,
  ToolbarGroup,
  Divider,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Flex,
  FlexItem,
  InputGroup,
  InputGroupItem,
  PageSection,
  Progress,
  Stack,
  StackItem,
  TextInput,
  Title,
  Select,
  SelectOption,
  SelectOptionProps,
  MenuToggle
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';

interface SelectOptionType extends Omit<SelectOptionProps, 'children'> {
  label: string;
}

const statusOptions: SelectOptionType[] = [
  { value: 'New', label: 'New' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Running', label: 'Running' },
  { value: 'Cancelled', label: 'Cancelled' }
];

const riskOptions: SelectOptionType[] = [
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' }
];

export const PrimaryDetailContentPadding: React.FunctionComponent = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);
  const [drawerPanelBodyContent, setDrawerPanelBodyContent] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [statusIsOpen, setStatusIsOpen] = React.useState(false);
  const [statusSelected, setStatusSelected] = React.useState<string | number | undefined>('Status');
  const [riskIsOpen, setRiskIsOpen] = React.useState(false);
  const [riskSelected, setRiskSelected] = React.useState<string | number | undefined>('Risk');
  const [selectedDataListItemId, setSelectedDataListItemId] = React.useState('');

  const onStatusSelect = (_event: React.MouseEvent<Element> | undefined, value: string | number | undefined) => {
    setStatusSelected(value);
    setStatusIsOpen(false);
  };

  const onRiskSelect = (_event: React.MouseEvent<Element> | undefined, value: string | number | undefined) => {
    setRiskSelected(value);
    setRiskIsOpen(false);
  };

  const onSelectDataListItem = (
    _event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    id: string
  ) => {
    setSelectedDataListItemId(id);
    setIsDrawerExpanded(true);
    setDrawerPanelBodyContent(id.charAt(id.length - 1));
  };

  const onCloseDrawerClick = (_event: React.MouseEvent<HTMLDivElement>) => {
    setIsDrawerExpanded(false);
    setSelectedDataListItemId('');
  };

  const toggleGroupItems = (
    <Flex alignItems={{ default: 'alignItemsCenter' }}>
      <ToolbarItem>
        <InputGroup>
          <InputGroupItem isFill>
            <TextInput
              name="content-padding-data-toolbar-input1"
              id="content-padding-data-toolbar-input1"
              type="search"
              aria-label="search input example"
              onChange={(_event: React.FormEvent<HTMLInputElement>, value: string) => setInputValue(value)}
              value={inputValue}
            />
          </InputGroupItem>
          <InputGroupItem>
            <Button variant={ButtonVariant.control} aria-label="search button for search input">
              <SearchIcon />
            </Button>
          </InputGroupItem>
        </InputGroup>
      </ToolbarItem>
      <ToolbarGroup variant="filter-group">
        <ToolbarItem>
          <Select
            aria-label="Status select"
            selected={statusSelected}
            isOpen={statusIsOpen}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setStatusIsOpen((prevIsOpen) => !prevIsOpen)}
                isExpanded={statusIsOpen}
              >
                {statusSelected}
              </MenuToggle>
            )}
            onOpenChange={(isOpen: boolean) => setStatusIsOpen(isOpen)}
            onSelect={onStatusSelect}
          >
            {statusOptions.map(({ label, value }) => (
              <SelectOption key={label} value={value}>
                {label}
              </SelectOption>
            ))}
          </Select>
        </ToolbarItem>
        <ToolbarItem>
          <Select
            aria-label="Risk select"
            selected={riskSelected}
            isOpen={riskIsOpen}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setRiskIsOpen((prevIsOpen) => !prevIsOpen)}
                isExpanded={riskIsOpen}
              >
                {riskSelected}
              </MenuToggle>
            )}
            onOpenChange={(isOpen: boolean) => setRiskIsOpen(isOpen)}
            onSelect={onRiskSelect}
          >
            {riskOptions.map(({ label, value }) => (
              <SelectOption key={label} value={value}>
                {label}
              </SelectOption>
            ))}
          </Select>
        </ToolbarItem>
      </ToolbarGroup>
    </Flex>
  );

  const ToolbarItems = (
    <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
      {toggleGroupItems}
    </ToolbarToggleGroup>
  );

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <Title headingLevel="h2" size="xl">
          node-{drawerPanelBodyContent}
        </Title>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseDrawerClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Flex spaceItems={{ default: 'spaceItemsLg' }} direction={{ default: 'column' }}>
          <FlexItem>
            <p>
              The content of the drawer really is up to you. It could have form fields, definition lists, text lists,
              labels, charts, progress bars, etc. Spacing recommendation is 24px margins. You can put tabs in here, and
              can also make the drawer scrollable.
            </p>
          </FlexItem>
          <FlexItem>
            <Progress value={parseInt(drawerPanelBodyContent) * 10} title="Title" />
          </FlexItem>
          <FlexItem>
            <Progress value={parseInt(drawerPanelBodyContent) * 5} title="Title" />
          </FlexItem>
        </Flex>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  const drawerContent = (
    <React.Fragment>
      <Toolbar id="content-padding-data-toolbar" usePageInsets>
        <ToolbarContent>{ToolbarItems}</ToolbarContent>
      </Toolbar>
      <DataList
        aria-label="data list"
        selectedDataListItemId={selectedDataListItemId}
        onSelectDataListItem={onSelectDataListItem}
      >
        <DataListItem id="content-padding-item1">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary-content">
                  <Flex spaceItems={{ default: 'spaceItemsMd' }} direction={{ default: 'column' }}>
                    <FlexItem>
                      <p>patternfly</p>
                      <small>
                        Working repo for PatternFly 5 <a>https://pf5.patternfly.org/</a>
                      </small>
                    </FlexItem>
                    <Flex spaceItems={{ default: 'spaceItemsMd' }}>
                      <FlexItem>
                        <CodeBranchIcon /> 10
                      </FlexItem>
                      <FlexItem>
                        <CodeIcon /> 4
                      </FlexItem>
                      <FlexItem>
                        <CubeIcon /> 5
                      </FlexItem>
                      <FlexItem>Updated 2 days ago</FlexItem>
                    </Flex>
                  </Flex>
                </DataListCell>,
                <DataListAction
                  key="actions"
                  aria-labelledby="content-padding-item1 content-padding-action1"
                  id="content-padding-action1"
                  aria-label="Actions"
                >
                  <Stack>
                    <StackItem>
                      <Button variant={ButtonVariant.secondary}>Secondary</Button>
                    </StackItem>
                    <StackItem>
                      <Button variant={ButtonVariant.link}>Link Button</Button>
                    </StackItem>
                  </Stack>
                </DataListAction>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem id="content-padding-item2">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary-content">
                  <Flex spaceItems={{ default: 'spaceItemsMd' }} direction={{ default: 'column' }}>
                    <FlexItem>
                      <p>patternfly-elements</p>
                      <small>PatternFly elements</small>
                    </FlexItem>
                    <Flex spaceItems={{ default: 'spaceItemsMd' }}>
                      <FlexItem>
                        <CodeBranchIcon /> 10
                      </FlexItem>
                      <FlexItem>
                        <CodeIcon /> 4
                      </FlexItem>
                      <FlexItem>
                        <CubeIcon /> 5
                      </FlexItem>
                      <FlexItem>
                        <CheckCircleIcon /> 7
                      </FlexItem>
                      <FlexItem>
                        <ExclamationTriangleIcon /> 5
                      </FlexItem>
                      <FlexItem>
                        <TimesCircleIcon /> 5
                      </FlexItem>
                      <FlexItem>Updated 2 days ago</FlexItem>
                    </Flex>
                  </Flex>
                </DataListCell>,
                <DataListAction
                  key="actions"
                  aria-labelledby="content-padding-item2 content-padding-action2"
                  id="content-padding-action2"
                  aria-label="Actions"
                >
                  <Stack>
                    <StackItem>
                      <Button variant={ButtonVariant.secondary}>Secondary</Button>
                    </StackItem>
                    <StackItem>
                      <Button variant={ButtonVariant.link}>Link Button</Button>
                    </StackItem>
                  </Stack>
                </DataListAction>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem id="content-padding-item3">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary-content">
                  <Flex spaceItems={{ default: 'spaceItemsMd' }} direction={{ default: 'column' }}>
                    <FlexItem>
                      <p>patternfly</p>
                      <small>
                        Working repo for PatternFly 5 <a>https://pf5.patternfly.org/</a>
                      </small>
                    </FlexItem>
                    <Flex spaceItems={{ default: 'spaceItemsMd' }}>
                      <FlexItem>
                        <CodeBranchIcon /> 10
                      </FlexItem>
                      <FlexItem>
                        <CodeIcon /> 4
                      </FlexItem>
                      <FlexItem>
                        <CubeIcon /> 5
                      </FlexItem>
                      <FlexItem>Updated 2 days ago</FlexItem>
                    </Flex>
                  </Flex>
                </DataListCell>,
                <DataListAction
                  key="actions"
                  aria-labelledby="content-padding-item3 content-padding-action3"
                  id="content-padding-action3"
                  aria-label="Actions"
                >
                  <Stack>
                    <StackItem>
                      <Button variant={ButtonVariant.secondary}>Secondary</Button>
                    </StackItem>
                    <StackItem>
                      <Button variant={ButtonVariant.link}>Link Button</Button>
                    </StackItem>
                  </Stack>
                </DataListAction>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem id="content-padding-item4">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary-content">
                  <Flex spaceItems={{ default: 'spaceItemsMd' }} direction={{ default: 'column' }}>
                    <FlexItem>
                      <p>patternfly-elements</p>
                      <small>PatternFly elements</small>
                    </FlexItem>
                    <Flex spaceItems={{ default: 'spaceItemsMd' }}>
                      <FlexItem>
                        <CodeBranchIcon /> 10
                      </FlexItem>
                      <FlexItem>
                        <CodeIcon /> 4
                      </FlexItem>
                      <FlexItem>
                        <CubeIcon /> 5
                      </FlexItem>
                      <FlexItem>
                        <CheckCircleIcon /> 7
                      </FlexItem>
                      <FlexItem>
                        <ExclamationTriangleIcon /> 5
                      </FlexItem>
                      <FlexItem>
                        <TimesCircleIcon /> 5
                      </FlexItem>
                      <FlexItem>Updated 2 days ago</FlexItem>
                    </Flex>
                  </Flex>
                </DataListCell>,
                <DataListAction
                  key="actions"
                  aria-labelledby="content-padding-item4 content-padding-action4"
                  id="content-padding-action4"
                  aria-label="Actions"
                >
                  <Stack>
                    <StackItem>
                      <Button variant={ButtonVariant.secondary}>Secondary</Button>
                    </StackItem>
                    <StackItem>
                      <Button variant={ButtonVariant.link}>Link Button</Button>
                    </StackItem>
                  </Stack>
                </DataListAction>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
      </DataList>
    </React.Fragment>
  );

  return (
    <DashboardWrapper>
      <PageSection>
        <ContentWrapper>
          <Content component="h1">Main title</Content>
          <Content component="p">
            Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
            of it's relative line height of 1.5.
          </Content>
        </ContentWrapper>
      </PageSection>
      <Divider component="div" />
      <PageSection padding={{ default: 'noPadding' }}>
        <Drawer isExpanded={isDrawerExpanded}>
          <DrawerContent panelContent={panelContent} colorVariant="no-background">
            <DrawerContentBody hasPadding>{drawerContent}</DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </PageSection>
    </DashboardWrapper>
  );
};
