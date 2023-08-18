import styled from "styled-components";

export const SearchInput = styled.input`
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5cacee;
    box-shadow: 0 0 5px rgba(92, 172, 238, 0.5);
  }
`;
