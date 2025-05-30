import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
    />
  );
};
