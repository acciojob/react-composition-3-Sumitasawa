import React, { useState } from 'react'

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false)

  const showTooltip = () => setVisible(true)
  const hideTooltip = () => setVisible(false)

  return (
    <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {React.cloneElement(children, {
        className: `${children.props.className || ''} tooltip`
      })}
      {visible && <span className="tooltiptext">{text}</span>}
    </div>
  )
}

export default Tooltip
