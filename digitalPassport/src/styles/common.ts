import { css } from "styled-components";

export const SlimScrollStyle = css`
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.6px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: #f0f0f0;
    margin: 1.1px;
    border-radius: 0 10px 10px 0;
  }

  &::-webkit-scrollbar-thumb {
    width: 0.2px;
    background: #dbdbdb;
    border-radius: 5px;
  }

  & {
    overflow-y: none;
    scrollbar-color: #dbdbdb transparent;
    scrollbar-width: thin;
  }
`;
