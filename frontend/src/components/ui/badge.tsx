{/*import React from 'react';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'outline' | 'solid';
}

export const Badge: React.FC<BadgeProps> = ({ className = '', children, variant = 'solid' }) => {
  const styles = variant === 'outline'
    ? 'border border-gray-400 text-gray-700 bg-white'
    : 'bg-indigo-100 text-indigo-700';

  return (
    <span className={`inline-block px-3 py-1 text-sm rounded-full ${styles} ${className}`}>
      {children}
    </span>
  );
};
*/}


import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'outline' | 'solid';
}

export const Badge: React.FC<BadgeProps> = ({ className = '', children, variant = 'solid', ...props }) => {
  const styles = variant === 'outline'
    ? 'border border-gray-400 text-gray-700 bg-white'
    : 'bg-indigo-100 text-indigo-700';

  return (
    <span className={cn("inline-block px-3 py-1 text-sm rounded-full", styles, className)} {...props}>
      {children}
    </span>
  );
};


