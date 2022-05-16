import { mdiArrowLeft } from '@mdi/js';
import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';

import SimpleVueIcon from '~/index.js';

const IconComponent = {
	template: `<vue-icon icon="${mdiArrowLeft}" />`,
};

test('mounts the icon', () => {
	const wrapper = mount(IconComponent, {
		global: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			components: { VueIcon: SimpleVueIcon },
		},
	});

	expect(wrapper.find('path').attributes().d).toEqual(mdiArrowLeft);
});
