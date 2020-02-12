import React from 'react';

const withPlaceholder = WrappedComponent => (props) => (
    <WrappedComponent
        placeholder='Mon HOC'
    />
);

export default withPlaceholder;
