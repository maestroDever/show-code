import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import useDarkMode from "use-dark-mode";

import Container from "./styled/Container";
import Button from "./styled/Button";

const Layout = styled.section`
  padding: 50px 0;

  @media screen and (min-width: 768px) {
    background-color: ${({ theme, darkMode }) =>
      darkMode ? theme.veryDarkGrey : theme.veryLightGrey};
  }

  .react-tabs__tab-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    li {
      background-color: ${({ theme, darkMode }) =>
        darkMode ? theme.veryDarkGrey : theme.veryLightGrey};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 25px;
      cursor: pointer;

      &.react-tabs__tab--selected,
      &:hover {
        color: ${({ theme }) => theme.green};
        background-color: ${({ theme }) => theme.almostBlack};
      }

      &:focus {
        outline: none;
      }
    }

    i {
      font-size: 3rem;
      margin-bottom: 5px;
    }

    h4 {
      margin: 0;
    }
  }

  .react-tabs__tab-panel {
    display: none;
    padding: 25px 50px;
    color: ${({ theme }) => theme.green};
    background-color: ${({ theme }) => theme.almostBlack};
    flex-direction: column;
    align-items: center;

    &.react-tabs__tab-panel--selected {
      display: flex;
    }
  }
`;

const AboutTabsSection = () => {
  const { value } = useDarkMode(false);

  return (
    <Layout darkMode={value}>
      <Container>
        <Tabs>
          <TabList>
            <Tab>
              <i className="fad fa-book-heart"></i>
              <h4>For Readers</h4>
            </Tab>
            <Tab>
              <i className="fad fa-pen-nib"></i>
              <h4>For Writers</h4>
            </Tab>
            <Tab>
              <i className="fad fa-box-usd"></i>
              <h4>For Sponsors</h4>
            </Tab>
            <Tab>
              <i className="fad fa-users-crown"></i>
              <h4>About Us</h4>
            </Tab>
          </TabList>

          <TabPanel>
            <p>
              Duis enim laboris aliquip ipsum velit sit dolore dolore pariatur
              nostrud labore et pariatur. Est fugiat in dolor do exercitation
              est minim est cillum nulla enim sit commodo ad. Consectetur fugiat
              amet consectetur adipisicing sit minim exercitation officia.
            </p>
            <Button darkBg as="a" href="#">
              Create Account
            </Button>
          </TabPanel>
          <TabPanel>
            <p>
              Officia veniam fugiat veniam laborum consequat enim consequat
              incididunt occaecat in aute deserunt ad. Et aliquip dolor cillum
              occaecat eu dolore cillum. Dolor Lorem elit commodo Lorem
              excepteur. Ut non nulla nulla consectetur dolore laboris do.
            </p>
            <Button darkBg as="a" href="#">
              Submit a Story
            </Button>
          </TabPanel>
          <TabPanel>
            <p>
              Fugiat reprehenderit irure minim pariatur qui nulla aute amet
              eiusmod deserunt. Pariatur nisi dolor est deserunt sunt dolor nisi
              occaecat velit reprehenderit aliqua aliqua. Aliquip pariatur
              proident non eiusmod mollit adipisicing qui sint.
            </p>
            <Button darkBg as="a" href="#">
              Sponsor Name
            </Button>
          </TabPanel>
          <TabPanel>
            <p>
              Consectetur velit voluptate aliquip nostrud et magna. Ex aliqua
              nostrud irure occaecat adipisicing reprehenderit non. Aliquip
              consequat exercitation mollit consequat ipsum ut.
            </p>
            <Button darkBg as="a" href="#">
              Learn More
            </Button>
          </TabPanel>
        </Tabs>
      </Container>
    </Layout>
  );
};

export default AboutSection;
