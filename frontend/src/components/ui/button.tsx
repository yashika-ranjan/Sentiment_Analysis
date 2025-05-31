{/*import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 ${className}`}
    >
      {children}
    </button>
  );
};
*/}




import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={cn("bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700", className)}
    >
      {children}
    </button>
  );
};


