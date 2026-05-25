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
  children?: (() => ReactNode) | ReactNode;

  /**
   * Render prop — receives the non-nullable `when` value for type-safe access.
   * Takes precedence over `children` when both are provided.
   */
  render?: (value: NonNullable<T>) => ReactNode;

  /**
   * Fallback component/element to render if condition is not met.
   * @default null
   */
  fallback?: ReactNode;
};

function Show<T>({ when, render, children, fallback = null }: Props<T>) {
  if (when) {
    if (render) {
      return render(when as NonNullable<T>);
    }

    if (typeof children === 'function') {
      return children();
    }

    return children ?? null;
  }

  return fallback;
}

export { Show };
