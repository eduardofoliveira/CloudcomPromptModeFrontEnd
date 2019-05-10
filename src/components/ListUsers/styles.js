import styled from "styled-components";

export const Table = styled.table`
  background-color: #2196f3;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;

  tbody td {
    border-bottom: 1px solid #0961aa;
    padding: 7px;
  }

  thead td {
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    padding: 7px;
  }

  tbody tr:hover {
    background-color: #55aef6;
  }
`;
