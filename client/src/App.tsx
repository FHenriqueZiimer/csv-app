import React, { useState, useEffect } from "react";
import CSVReader from "./components/CSVUploader/csvUploader";
import SearchBar from "./components/SearchBar/searchBar";
import styled from "styled-components";
import Card from "./components/Card/card";

const AppWrapper = styled.div`
  font-family: "Goudy Bookletter 1911", sans-serif;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

function App() {
  const [csvData, setCSVData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const response = await fetch("http://localhost:3000/api/users").then(
      (response) => response.json()
    );

    setCSVData(response);
  };

  const handleSearch = async (query: string) => {
    const response = await fetch(
      `http://localhost:3000/api/users?q=${query}`
    ).then((response) => response.json());

    setCSVData(response);
  };

  return (
    <AppWrapper>
      <h1>CSV Reader, Saver and Search</h1>
      <CSVReader onFileLoad={getApiData} />
      <SearchBar onSearch={handleSearch} />
      {csvData.length > 0 ? (
        <CardContainer>
          {csvData.map((rowData: Record<string, string>, index: number) => (
            <Card key={index} rowData={rowData} />
          ))}
        </CardContainer>
      ) : <p>{csvData.length} DATA FOUND</p>}
    </AppWrapper>
  );
}

export default App;
