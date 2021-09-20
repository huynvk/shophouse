import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { VerticalLayout } from 'components/Layouts';

export default {
  title: 'Components/VerticalLayout',
  component: VerticalLayout,
};

const Template = ({ width, height, ...props }) => (
  <StoryContainer width={width} height={height}>
    <VerticalLayout
      header={<div sx={{ background: 'green' }}>Header</div>}
      footer={<div sx={{ background: 'green' }}>Footer</div>}
      sx={{
        background: 'white',
        border: '1px solid red',
      }}
      {...props}
    >
      <p>Content</p>
    </VerticalLayout>
  </StoryContainer>
);

export const Medium = Template.bind({});
Medium.args = {
  width: 'md',
  height: '500px',
};

export const Small = Template.bind({});
Small.args = {
  width: 'sm',
  height: '500px',
};
