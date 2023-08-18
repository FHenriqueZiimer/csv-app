import React, { ChangeEvent } from "react";
import {
  Container,
   FileInputContainer,
   CustomFileInput,
   FileInputLabel
} from "./styles";

interface CSVReaderProps {
  onFileLoad: () => void;
}

const CSVUploader: React.FC<CSVReaderProps> = ({ onFileLoad }) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (e.target?.result) {
          const formData = new FormData();
    
          formData.append("file", file);
    
          await fetch("http://localhost:3000/api/files", {
            method: "POST",
            body: formData,
          }).then((response) => response.json());

          onFileLoad()
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Container>
     <FileInputContainer>
      <CustomFileInput type="file" accept=".csv" onChange={handleFileChange} id="fileInput" />
      <FileInputLabel htmlFor="fileInput">Select CSV File</FileInputLabel>
    </FileInputContainer>
    </Container>
  );
};

export default CSVUploader;
