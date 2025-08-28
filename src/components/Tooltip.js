import React, { useState, cloneElement } from "react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);
  
  return cloneElement(children, {
    className: `${children.props.className || ""} tooltip`,
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    children: (
      <>
        {children.props.children}
        {visible && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
};

export default Tooltip;
