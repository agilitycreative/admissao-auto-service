import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={cn("bg-white rounded-lg shadow", className)} {...props}>
    {children}
  </div>
);

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={cn("p-4", className)} {...props}>
    {children}
  </div>
);

export default Card;
