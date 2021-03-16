// src/components/Task.stories.js

import Task from '../components/Task.svelte';
import { action } from '@storybook/addon-actions';

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export default {
  component: Task,
  title: 'Task',
  excludeStories: /.*Data$/,
  argTypes: {
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' },
  },
};

const Template = ({ onArchiveTask, onPinTask, ...args }) => ({
  Component: Task,
  props: args,
  on: {
    ...actionsData,
  },
});

export const Default = Template.bind({});
Default.args = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};
export const Pinned = Template.bind({});
Pinned.args = {
    ...Default.args,
    state: 'TASK_PINNED',
};

export const Archived = Template.bind({});
Archived.args = {
    ...Default.args,
    state: 'TASK_ARCHIVED',
};