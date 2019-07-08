import * as React from 'react';
import { TextField } from '@material-ui/core';

interface InputProps {
  /** Sample prop description */
  onChange?: () => {};
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  fullWidth?: boolean;
}

const Input: React.SFC<InputProps> = props => <TextField variant="filled" {...props} />;

export { Input };
