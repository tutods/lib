import { createElement } from 'react';

import type { ConditionalContainerProps, RenderElement } from '@/components/ConditionalContainer/types';

/**
 * Component to render a specific element or component according a condition
 * @description The `render` element is required, and will be rendered when the condition is `true`, otherwise will render the `fallback` element, being this optional.
 *
 * @example ```
 * <ConditionalContainer
 *  when={type === 'button'}
 *  render={{
 *    element: Button, // this is the component,
 *    props: {
 *      className: 'bg-indigo-600 text-white'
 *    }
 *  }}
 *  fallback={{
 *    element: 'div'
 *  }}
 * >
 *  This is the children
 * </ConditionalContainer>
 * ```
 */
const ConditionalContainer = <TRender extends RenderElement, TFallback extends RenderElement>({
  children,
  fallback,
  render,
  when,
}: ConditionalContainerProps<TRender, TFallback>) => {
  if (when) {
    const { element, props: renderProps } = render;

    // If (typeof element === 'string') {
    return children ? createElement(element, renderProps, children) : createElement(element, renderProps);
  }

  if (!when && fallback) {
    const { element: fallbackElement, props: fallbackProps = {} } = fallback;

    return children
      ? createElement(fallbackElement, fallbackProps, children)
      : createElement(fallbackElement, fallbackProps);
  }

  // When no `fallback` element is specified
  return <>{children}</>;
};

export { ConditionalContainer };
export type { ConditionalContainerProps };
