import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { css } from '@patternfly/react-styles';

export interface ContentWrapperProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered within the ContentWrapper */
  children?: React.ReactNode;
  /** Additional classes added to the ContentWrapper */
  className?: string;
  /** Flag to indicate the all links in the content block have visited styles applied if the browser determines the link has been visited */
  isVisited?: boolean;
}

export const ContentWrapper: React.FunctionComponent<ContentWrapperProps> = ({
  children,
  className = '',
  isVisited = false,
  ...props
}: ContentWrapperProps) => (
  <div {...props} className={css(styles.content, isVisited && styles.modifiers.visited, className)}>
    {children}
  </div>
);

ContentWrapper.displayName = 'ContentWrapper';
