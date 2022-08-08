import React, { useState } from "react";
import BlogList from "./components/BlogList";
import StyledNavbar from "./components/Navbar";
import StickySidebar from "./components/StickySidebar";

function HatchwaysBlog() {
  const [currentFilters, setCurrentFilters] = useState([]);

  const handleFilterChange = (filter) => {
    if (currentFilters.includes(filter)) {
      setCurrentFilters(currentFilters.filter((f) => f !== filter));
    } else {
      setCurrentFilters([...currentFilters, filter]);
    }
  };

  return (
    <div style={{ margin: "0 auto", width: "100%", padding: 20 }}>
      <StyledNavbar />
      <div style={{ marginTop: 60, display: "flex" }}>
        <BlogList filters={currentFilters} />
        <StickySidebar selectTags={handleFilterChange} />
      </div>
    </div>
  );
}

export default HatchwaysBlog;
