import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`,
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    children: (
      <>
        {children.props.children}
        {visible && <div>{text}</div>}
      </>
    ),
  });
};

export default Tooltip;
