import { mdiArrowLeft } from '@mdi/js';
import { mount } from '@vue/test-utils';
import { expect,test } from 'vitest';

import { simpleVueIcon } from '~/plugin.js';

 
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
