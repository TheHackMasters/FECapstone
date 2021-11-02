import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
position: absolute;
top: 10px;
right: 10px;
cursor:pointer;
`;

function Checkbox(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <StyledCheckbox
        id="checkbox_id"
        type="checkbox"
        defaultChecked={clicked}
        onClick={() => {
          setClicked(!clicked);
        }}
      />
      <label htmlFor="checkbox_id" />
    </div>
  );
}

export default Checkbox;
