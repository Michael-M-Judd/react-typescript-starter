import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Button } from '@material-ui/core';

interface LinkButtonProps {
  /** Sample prop description */
  children?: React.ReactNodeArray | React.ElementType | string;
  to: string;
}

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref as any} {...props} />
));

const LinkButton: React.SFC<LinkButtonProps> = ({ children, to }) => (
  // @ts-ignore
  <Button size="large" variant="contained" color="primary" component={AdapterLink} to={to}>
    {children}
  </Button>
);

export { LinkButton };
