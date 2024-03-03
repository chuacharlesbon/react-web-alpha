import { FC } from 'react';

interface SpacerProps {
    className?: string;
    id?: string;
}

const Vertical: FC<SpacerProps> = ({ className, id, ...props }) => (
    <div className={`px-2 ${className}`} {...props} id={id} />
);

const Horizontal: FC<SpacerProps> = ({ className, id, ...props }) => (
    <div className={`py-2 ${className}`} {...props} id={id} />
);

const Custom: FC<SpacerProps> = ({ className, id, ...props }) => (
    <div className={className} {...props} id={id} />
);

export const Spacer = {
    Vertical,
    Horizontal,
    Custom,
}