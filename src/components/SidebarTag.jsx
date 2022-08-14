import React, { useState } from "react";

function SidebarTag({ selectTags, tag }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    selectTags(tag);
  };

  return (
    <div
      className={isSelected ? "tag selected" : "tag"}
      key={tag}
      onClick={() => handleClick()}
    >
      {tag}
    </div>
  );
}

export default SidebarTag;
