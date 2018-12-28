import React from 'react';
import "./ClearButton";

export const ClearButton = (props) => (
<div className="clear-btn" onClick={props.children}>
{props.children}
</div>
);
