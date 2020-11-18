import styled from "styled-components";

export const PageFrom = styled.form`
  width: 400px;

  background: #1b262c;
  border: 1px solid #d3e2e5;
  border-radius: 30px;

  padding: 20px 40px;

  position: absolute;
  top: 30px;
  left: 45px;

  z-index: 1;

  fieldset {
    border: 0;
  }

  fieldset legend {
    width: 100%;

    font-size: 32px;
    line-height: 34px;
    color: #7dd3fd;
    font-weight: 700;

    border-bottom: 1px solid #7dd3fd;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  .input-block + .input-block {
    margin-top: 24px;
  }

  .input-block label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }

  .input-block label span {
    font-size: 14px;
    color: #f2f4f4;
    margin-left: 24px;
    line-height: 24px;
  }

  .input-block input {
    height: 60px;
    padding: 0 15px;
    width: 100%;
    background: #f2f4f4;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }

  button.confirm-button {
    margin-top: 34px;
    margin-bottom: 32px;

    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background-color: #3282b8;
    border-radius: 20px;
    color: #f5f8fa;
    font-weight: 800;

    transition: background-color 0.2s;
  }

  button.confirm-button:hover {
    background-color: #46b5d1;
  }

  /* Styling react select */
  .filter__control {
    height: 60px;

    border-radius: 20px !important;

    width: 100% !important;
    background: #f5f8fa !important;
    border: 1px solid #d3e2e5 !important;
    border-radius: 20px !important;
    outline: none !important;
    color: #5c8599 !important;
  }

  .filter__input input {
    height: 30px;
  }

  .filter__value-container {
    height: 60px;
  }

  .filter__option {
    background: #f5f8fa !important;
    color: #5c8599 !important;
  }

  .filter__option--is-focused {
    background: #d3e2e5 !important;
    color: #010101 !important;
  }
`;
