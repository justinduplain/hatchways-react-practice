import React from "react";
import blogs from "../data/blogs.json";
import "../css/sidebar.scss";
import SidebarTag from "./SidebarTag";

const exampleFooter = [
  "Help",
  "Status",
  "Writers",
  "Blog",
  "Careers",
  "Privacy",
  "Terms",
  "About",
];

function StickySidebar({ selectTags }) {
  return (
    <div className="sidebar">
      <p>discover more of what matters to you</p>
      <div className="tagWrapper">
        {blogs.tags.map((tag) => (
          <SidebarTag selectTags={selectTags} tag={tag} key={tag} />
        ))}
      </div>
      <div className="tagWrapper">
        {exampleFooter.map((footer) => (
          <a href="/#" key={footer} style={{ color: "black" }}>
            {footer}
          </a>
        ))}
      </div>
    </div>
  );
}

export default StickySidebar;
