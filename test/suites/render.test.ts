import { mount } from '@vue/test-utils';
import { mdiArrowLeft } from '@mdi/js';
import { test, expect } from 'vitest';
import { simpleVueIcon } from '~/plugin.js';

// eslint-disable-next-line @typescript-eslint/naming-convention
const IconComponent = {
	template: `<v-icon icon="${mdiArrowLeft}" />`,
};

test('mounts the icon', () => {
	const wrapper = mount(IconComponent, {
		global: {
			plugins: [simpleVueIcon],
		},
	});

	expect(wrapper.find('path').attributes().d).toEqual(mdiArrowLeft);
});
