import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig(({ env }) => {
	const isDev = env === "development";

	return {
		source: {
			entry: {
				index: "./src/index.ts",
			},
		},
		lib: [
			{
				format: "esm",
				dts: true,
				autoExtension: false,
			},
		],
		output: {
			target: "web",
			cleanDistPath: true,
			injectStyles: true,
			emitCss: true,
			minify: !isDev,
			sourceMap: isDev,
			cssModules: {
				auto: true,
			},
		},
		plugins: [
			pluginReact(),
			/**
			 * If in the future needs to have SVGs in this package, use `@rsbuild/plugin-svgr` with the following configuration:
			 * ```ts
			 * pluginSvgr({
			 *   mixedImport: true,
			 *   svgrOptions: {
			 *     exportType: 'named',
			 *   },
			 * }),
			 * ```
			 */
		],
	};
});
