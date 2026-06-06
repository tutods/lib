import type {
	ComponentProps,
	ForwardRefExoticComponent,
	JSX,
	ReactElement,
	ReactNode,
} from "react";

/**
 * Available types to be used on `render` or `otherwise`
 */
type RenderElement =
	| keyof JSX.IntrinsicElements
	// biome-ignore lint/suspicious/noExplicitAny: This is a generic type that can accept any component, so `any` is necessary here.
	| ((props: any) => ReactElement)
	// biome-ignore lint/suspicious/noExplicitAny: This is a generic type that can accept any component, so `any` is necessary here.
	| ForwardRefExoticComponent<any>;

type ComponentArgs<T extends RenderElement> = {
	/**
	 * Element to be rendered
	 * @example `Button`
	 */
	element: T;

	/**
	 * Properties to apply to element
	 * @example `{type: 'button'}`
	 */
	props?: Omit<ComponentProps<T>, "children">;
};

type ConditionalContainerProps<
	TRender extends RenderElement,
	TFallback extends RenderElement,
> = {
	/**
	 * Condition to display the `render` element
	 */
	when: boolean;

	/**
	 * Children of the container
	 */
	children?: ReactNode;

	/**
	 * Component to be rendered when the condition is satisfied
	 */
	render: ComponentArgs<TRender>;

	/**
	 * Component to be rendered when the condition isn't satisfied
	 */
	fallback?: ComponentArgs<TFallback>;
};

export type { ConditionalContainerProps, RenderElement };
