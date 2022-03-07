import styled from "styled-components";
import { rgba } from "polished";
import colors from "../../../../constants/colors";

export const Box = styled.div`
  width: 300px;
  background: ${colors.white};

  border-radius: 2px;
  box-shadow: 2px 2px 5px ${rgba(colors.black, 0.5)};
`;

export const BoxHeader = styled.div`
  width: 100%;
  border: 1px solid ${colors.black};
  border-width: 0px 0px 1px 0px;

  padding: 10px;
`;

export const BoxBody = styled.div`
  padding: 10px;

  input {
    width: 100%;
    margin-bottom: 20px;
  }
`;
