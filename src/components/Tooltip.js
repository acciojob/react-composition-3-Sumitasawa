import React,{useState} from 'react'

const Tooltip = ({text,children}) => {

 const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);
  return (

    <div
      className="tooltip"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && <span className="tooltiptext">{text}</span>}
    </div>
   
  )
}

export default Tooltip
