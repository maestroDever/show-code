import React from "react";
import useDarkMode from "use-dark-mode";
import styled from "styled-components";

const Layout = styled.button`
  font-size: 3rem;
  color: ${({theme, darkMode}) => (darkMode ? theme.veryLightGrey : theme.veryDarkGreen)};
  position: relative;
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 0;
  overflow: hidden;
  cursor: pointer;
  margin-right: ${({error}) => (error ? "0" : "60px")};

  @media screen and (min-width: 768px) {
    margin-right: 0;
  }

  &:hover i {
    opacity: 1;
  }

  i {
    position: absolute;
    transform: translate(-50%, 50px);
    transition: all 200ms ease-in-out;
    opacity: 0.7;

    &.active {
      transform: translate(-50%, -50%);
    }
  }
`;

const DarkModeToggle = ({error}) => {
  const {value, toggle} = useDarkMode(false);

  return (
    <Layout type="button" darkMode={value} onClick={toggle} error={error}>
      <i aria-hidden className={`fas fa-sun ${!value ? `active` : ``}`}></i>
      <i aria-hidden className={`fas fa-moon ${value ? `active` : ``}`}></i>
    </Layout>
  );
};

export default DarkModeToggle;

