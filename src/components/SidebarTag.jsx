import React, { useState } from "react";

function SidebarTag({ selectTags, tag }) {
  const [isSelected, setIsSelected] = useState(false);
  let className = "tag";

  const handleClick = () => {
    setIsSelected(!isSelected);
    isSelected ? (className = "tag selected") : (className = "tag");
    selectTags(tag);
  };

  return (
    <div className={className} key={tag} onClick={() => handleClick()}>
      {tag}
    </div>
  );
}

export default SidebarTag;
