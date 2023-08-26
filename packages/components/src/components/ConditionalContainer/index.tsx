import { ConditionalContainerProps, RenderElement } from '@/components/ConditionalContainer/types';
import { createElement } from 'react';

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
  when,
  children,
  render,
  fallback,
}: ConditionalContainerProps<TRender, TFallback>) => {
  if (!children) {
    return null;
  }

  if (when) {
    const { element, props: renderProps } = render;

    // for the cases like `element: "div"`
    if (typeof element === 'string') {
      return createElement(element, renderProps, children);
    }

    return element({ children, ...renderProps });
  }

  if (fallback) {
    const { element: fallbackElement, props: fallbackProps = {} } = fallback;

    // for the cases like `element: "div"`
    if (typeof fallbackElement === 'string') {
      return createElement(fallbackElement, fallbackProps, children);
    }

    return fallbackElement({ children, ...fallbackProps });
  }

  // when no `fallback` element is specified
  return <>{children}</>;
};

export { ConditionalContainer };
export type { ConditionalContainerProps };
