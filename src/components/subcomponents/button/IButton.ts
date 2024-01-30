import { ReactNode } from "react";

export interface IProps {
  className?: string,
  ariaLabel: string,
  children: ReactNode,
  style: 'primary' | 'icon'
  onClick?: () => void
}