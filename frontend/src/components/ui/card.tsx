import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-md">{children}</div>
);
export const CardHeader = ({ children }: { children: React.ReactNode }) => <div className="p-4 border-b">{children}</div>;
export const CardTitle = ({ children }: { children: React.ReactNode }) => <h2 className="text-xl font-bold">{children}</h2>;
export const CardDescription = ({ children }: { children: React.ReactNode }) => <p className="text-sm text-gray-500">{children}</p>;
export const CardContent = ({ children }: { children: React.ReactNode }) => <div className="p-4">{children}</div>;
