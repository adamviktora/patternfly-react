import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Content/content';
import { css } from '@patternfly/react-styles';

export enum ContentListVariants {
  ul = 'ul',
  ol = 'ol',
  dl = 'dl'
}

const componentStyles = {
  ul: styles.contentUl,
  ol: styles.contentOl,
  dl: styles.contentDl
};

export interface ContentListProps extends React.HTMLProps<HTMLElement> {
  /** Content rendered within the ContentList */
  children?: React.ReactNode;
  /** Additional classes added to the ContentList */
  className?: string;
  /** The text list component */
  component?: 'ul' | 'ol' | 'dl';
  /** Modifies the list to include plain styling */
  isPlain?: boolean;
}

export const ContentList: React.FunctionComponent<ContentListProps> = ({
  children = null,
  className = '',
  component = ContentListVariants.ul,
  isPlain = false,
  ...props
}: ContentListProps) => {
  const Component: any = component;

  return (
    <Component {...props} className={css(isPlain && styles.modifiers.plain, componentStyles[component], className)}>
      {children}
    </Component>
  );
};
ContentList.displayName = 'ContentList';
