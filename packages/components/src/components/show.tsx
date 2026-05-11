import type { ReactNode } from 'react';

type Props<T> = {
  /**
   * Condition to match.
   */
  when: T | undefined | null;

  /**
   * Function that returns the component or element to render if condition is met.
   * Using a function prevents the children from being evaluated when condition is false.
   */
  children: (() => ReactNode) | ReactNode;

  /**
   * Fallback component/element to render if condition is not met.
   * @default null
   */
  fallback?: ReactNode;
};

function Show<T>({ when, children, fallback = null }: Props<T>) {
  if (when) {
    if (typeof children === 'function') {
      return children();
    }

    return children;
  }

  return fallback;
}

export { Show };
