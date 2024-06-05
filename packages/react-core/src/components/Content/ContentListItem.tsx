import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { css } from '@patternfly/react-styles';

export enum ContentListItemVariants {
  li = 'li',
  dt = 'dt',
  dd = 'dd'
}

const componentStyles = {
  li: styles.contentLi,
  dt: styles.contentDt,
  dd: styles.contentDd
};

export interface ContentListItemProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered within the ContentListItem */
  children?: React.ReactNode;
  /** Additional classes added to the ContentListItem */
  className?: string;
  /** The text list item component */
  component?: 'li' | 'dt' | 'dd';
}

export const ContentListItem: React.FunctionComponent<ContentListItemProps> = ({
  children = null,
  className = '',
  component = ContentListItemVariants.li,
  ...props
}: ContentListItemProps) => {
  const Component: any = component;

  return (
    <Component {...props} className={css(componentStyles[component], className)}>
      {children}
    </Component>
  );
};
ContentListItem.displayName = 'ContentListItem';
