import './icons.css';

import type { ExtractPropTypes } from 'vue';
import { defineComponent, h } from 'vue';

import { props as componentProps } from './props.js';

const mdiAlert = 'M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z';

export const getAttrs = (
	props: ExtractPropTypes<typeof componentProps>,
	attrs: Record<string, unknown>
) => {
	const iconPath = props.icon ?? mdiAlert;

	const spanAttrs = {
		role: props.role,
		'aria-label': props.ariaLabel,
		...attrs,
	};
	const svgAttrs = {
		fill: 'currentColor',
		width: props.width ?? props.size,
		height: props.height ?? props.size,
		viewBox: props.viewBox,
		xmlns: props.xmlns,
	};
	const pathAttrs = {
		d: iconPath,
	};

	return {
		spanAttrs,
		svgAttrs,
		pathAttrs,
	};
};

function getClass(data: { class?: string }) {
	const classes: Record<string, boolean> = {
		'vue-icon': true,
	};

	if (data.class !== undefined) classes[data.class] = true;
	return classes;
}

export default defineComponent({
	name: 'VueIcon',
	props: componentProps,
	render() {
		const { spanAttrs, svgAttrs, pathAttrs } = getAttrs(this, this.$attrs);

		return h(
			'span',
			{
				...spanAttrs,
				class: getClass(this),
			},
			[
				h('svg', svgAttrs, [
					this.title ? h('title', [this.title]) : undefined,
					h('path', pathAttrs),
				]),
			]
		);
	},
});

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		VueIcon: DefineComponent<typeof componentProps>;
	}
}
