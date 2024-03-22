import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <>
      <Navigation />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </>
  );
};

export default Main;
