import { ReactNode } from "react";
import styles from './style.module.scss';

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}