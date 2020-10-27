import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import device from "./Device";

const SearchBar = styled.form`
  top: ${({ showResult }) => (showResult ? "0%" : "30%")};
  position: relative;
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 500px;
  transition: 0.8s 0.5s;
  @media ${device.laptopL} {
    max-width: 600px;
  }
  @media ${device.desktop} {
    max-width: 700px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: #ffffff;
  font-size: 16px;
  padding: 10px 15px 10px 40px;
  color: #000;
  transition: 0.2s;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:focus {
    color: #191919;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    outline: none;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    padding: 15px 20px 15px 45px;
    border-radius: 30px;
  }
`;

const SearchIcon = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
  height: 20px;
  width: 20px;
  color: #000;
  @media ${device.tablet} {
    height: 15px;
    width: 15px;
    font-size: 15px;
  }
  @media ${device.laptop} {
    height: 16px;
    width: 16px;
    font-size: 16px;
  }
`;

const CurrentLocation = styled.span`
  position: absolute;
  top:50%;
  transform:translate(0,-50%);
  right:20px;
  height:20px;
  width:20px;
  cursor:pointer;
`;

const SearchCity = ({ submit, value, change, showResult, handleGetLocation }) => {
  return (
    <>
      <SearchBar showResult={showResult} onSubmit={submit}>
        <SearchInput
          type="text"
          value={value}
          placeholder="Nhập tên thành phố..."
          onChange={change}
        />
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
        <CurrentLocation onClick={handleGetLocation}>
          <FontAwesomeIcon icon={faSearchLocation} />
        </CurrentLocation>
      </SearchBar>
    </>
  );
};

SearchCity.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  showResult: PropTypes.bool.isRequired,
};

export default SearchCity;
