import styled from "styled-components";
import { px2vw } from "../utils/Utils";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(10)};
  margin: ${px2vw(10)};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media (max-width: 767px) {
    flex: 0 0 33.3333%;
    width: ${px2vw(250, 468)};
    min-height: ${px2vw(200, 468)};
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex: 0 0 33.3333%;
    width: ${px2vw(250, 568)};
    min-height: ${px2vw(200, 568)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(250, 568)};
    min-height: ${px2vw(200, 868)};
    height: 100%;
  }

`;

export const BoxTitle = styled.h3`
  color: #FFFFFF;
  font-size: 1rem;
  text-align: left;
  paddingLeft: 1rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;