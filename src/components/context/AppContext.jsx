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

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false); //To add the FooterNav

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is more than 200px
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    // const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);

    // Apply the dark mode class to the html element
    root.classList.toggle("dark");
  };

  // Function to handle table row click
  const handleTitleClick = (item) => {
    setSelectedItem(item); // Set the clicked item details
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

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
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setDisplayData(originalData); // Reset to original data when search is cleared
    } else {
      // Filter the data based on title, speaker, or status
      const filteredData = originalData.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.speaker.toLowerCase().includes(query) ||
          item.status.toLowerCase().includes(query)
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
      value={{
        handleSort,
        handleSearch,
        searchQuery,
        displayData,
        handleTitleClick,
        closeModal,
        isModalOpen,
        selectedItem,
        isVisible,
        toggleDarkMode,
        isDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
