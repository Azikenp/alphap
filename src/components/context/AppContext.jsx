import { createContext, useEffect, useState } from "react";
import { tableData } from "../data";

//create context object
export const AppContext = createContext({});

//create the provide object
// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  // State for managing the displayed data and the search query
  const [originalData] = useState(tableData); // Original data remains constant
  const [displayData, setDisplayData] = useState(tableData); // Data that gets sorted or searched
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [isSorted, setIsSorted] = useState(false); // To check if sorted state is active

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    setIsSorted(true); // Sorting is active
  };

  // Function to handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // If search query is empty, return the original data
    if (query === "") {
      setDisplayData(originalData);
    } else {
      // Filter the data based on the search query
      const filteredData = originalData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setDisplayData(filteredData);
    }
  };

  // Effect to handle sorting logic
  useEffect(() => {
    if (isSorted) {
      // Sort the current display data
      const sortedData = [...displayData].sort((a, b) => {
        let aKey = a[sortConfig.key];
        let bKey = b[sortConfig.key];

        // Handle date sorting specifically
        if (sortConfig.key === "date") {
          aKey = new Date(aKey);
          bKey = new Date(bKey);
        }

        if (aKey < bKey) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aKey > bKey) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });

      // Set the sorted data to display
      setDisplayData(sortedData);
    }
  }, [sortConfig, displayData, isSorted]);
  return (
    <AppContext.Provider
      value={{ handleSort, handleSearch, searchQuery, displayData }}
    >
      {children}
    </AppContext.Provider>
  );
};
