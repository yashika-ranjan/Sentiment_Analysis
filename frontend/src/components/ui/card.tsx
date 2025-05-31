{/*import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-md">{children}</div>
);
export const CardHeader = ({ children }: { children: React.ReactNode }) => <div className="p-4 border-b">{children}</div>;
export const CardTitle = ({ children }: { children: React.ReactNode }) => <h2 className="text-xl font-bold">{children}</h2>;
export const CardDescription = ({ children }: { children: React.ReactNode }) => <p className="text-sm text-gray-500">{children}</p>;
export const CardContent = ({ children }: { children: React.ReactNode }) => <div className="p-4">{children}</div>;
*/}


import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("bg-white rounded-lg shadow-md", className)} {...props} />
));

export const CardHeader = ({ className = '', ...props }: CardProps) => (
  <div className={cn("p-4 border-b", className)} {...props} />
);

export const CardTitle = ({ className = '', ...props }: CardProps) => (
  <h2 className={cn("text-xl font-bold", className)} {...props} />
);

export const CardDescription = ({ className = '', ...props }: CardProps) => (
  <p className={cn("text-sm text-gray-500", className)} {...props} />
);

export const CardContent = ({ className = '', ...props }: CardProps) => (
  <div className={cn("p-4", className)} {...props} />
);

