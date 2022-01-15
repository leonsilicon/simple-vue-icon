import { mount } from '@vue/test-utils';
import { mdiArrowLeft } from '@mdi/js';
import { simpleVueIcon } from '~/plugin.js';

// eslint-disable-next-line @typescript-eslint/naming-convention
const IconComponent = {
	template: `<v-icon path="${mdiArrowLeft}" />`,
};

test('mounts the icon', () => {
	const wrapper = mount(IconComponent, {
		global: {
			plugins: [simpleVueIcon],
		},
	});

	expect(wrapper.find('path').attributes().d).toEqual(mdiArrowLeft);
});
