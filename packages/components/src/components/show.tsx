import type { ReactNode } from "react";

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

/**
 * Renders its children if the `when` prop is truthy, otherwise renders the `fallback` prop.
 *
 * @param when   - The condition to evaluate. Renders children/render when truthy.
 * @param render - Render prop receiving the non-nullable `when` value. Takes
 *                 precedence over `children` when both are provided.
 * @param children - Content to render when the condition is met. Can be a
 *                   React node or a lazy function that returns a React node.
 * @param fallback  - Content rendered when the condition is not met.
 *                    Defaults to `null`.
 *
 * @example
 * ```tsx
 * <Show when={user} fallback={<LoginButton />}>
 *   <Dashboard user={user} />
 * </Show>
 * ```
 *
 * @example
 * ```tsx
 * <Show when={items.length > 0} render={(items) => <List data={items} />} fallback={<Empty />} />
 * ```
 */
function Show<T>({ when, render, children, fallback = null }: Props<T>) {
	if (when) {
		if (render) {
			return render(when as NonNullable<T>);
		}

		if (typeof children === "function") {
			return children();
		}

		return children ?? null;
	}

	return fallback;
}

export { Show };
