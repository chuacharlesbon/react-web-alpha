import { FC } from 'react';

interface FlexRowProps {
  className?: string;
  id?: string;
  children?: any;
}

export const FlexRow: FC<FlexRowProps> = ({ className, id, children, ...props }) => (
  <div className={`d-flex flex-row ${className}`} id={id} {...props} >
    {children}
  </div>
);