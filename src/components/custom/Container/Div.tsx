import { FC } from 'react';

interface DivProps {
  className?: string;
  children?: any;
  props?: any;
  style?: any;
  id?: string;
}

export const Div: FC<DivProps> = ({ className, children, id, style, ...props }) => (
  <div className={`${className}`} {...props} id={id} style={style} >
    {children}
  </div>
);