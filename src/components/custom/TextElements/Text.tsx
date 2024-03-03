import { FC } from 'react';

interface DataProps {
    className?: string;
    children?: any;
    props?: any;
    id?: string;
}

export const Text: FC<DataProps> = ({ className, children, id, ...props }) => (
    <p className={`${className}`} {...props} id={id}>
        {children}
    </p>
);