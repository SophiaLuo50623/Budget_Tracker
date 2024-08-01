import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import highlightText from 'highlight-text';

const AutocompleteDropdown = ({ suggestions }) => {
const [value, setValue] = useState('');

const renderItem = (item, isHighlighted) => (
<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
{highlightText(item, value)}
</div>
);

return (
<Autocomplete
value={value}
items={suggestions}
getItemValue={(item) => item}
onChange={(e) => setValue(e.target.value)}
renderItem={renderItem}
/>
);
};

export default AutocompleteDropdown;