import { FC } from 'react';

interface DataProps {
    className?: string;
    children?: any;
    props?: any;
    id?: string;
}

export const Span: FC<DataProps> = ({ className, children, id, ...props }) => (
  <span className={`${className}`} {...props} id={id}>
    {children}
  </span>
);