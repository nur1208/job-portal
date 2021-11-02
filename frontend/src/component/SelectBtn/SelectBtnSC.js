import styled from "styled-components";

export const SelectBtnWrapper = styled.div`
  display: flex;
  width: auto;
  overflow-x: scroll;
  overflow-y: hidden;
  overflow-x: visible;
  overflow-y: visible;
  justify-content: center;

  .yosegi-FilterPill-pillList {
    display: flex;
    padding: 0 14px;
    margin: 0;
  }

  .yosegi-FilterPill-pillList {
    padding: 0;
    flex-wrap: wrap;
  }

  .yosegi-FilterPill-pill {
    box-sizing: border-box;
    height: 41px;
    min-width: 100px;
    padding: calc(0.5rem + 2px) calc(1rem + 2px);
    border: 0;
    justify-content: center;
    margin: 0 0.5rem 0.5rem 0;
  }

  .yosegi-FilterPill-pill {
    display: flex;
    cursor: pointer;
    text-decoration: none !important;
    align-items: center;
    position: relative;
    background-color: #e4e2e0;
    color: #2d2d2d;
    border: 2px solid #e4e2e0;
    border-radius: 0.5rem;
    outline: 0;
    margin: 4px 0.5rem 8px 0;
    padding: 0.5rem 1rem;
    font-family: Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 1.34;
    max-width: 228px;
  }

  [dir="rtl"] .yosegi-FilterPill-pill {
    margin: 0 0 0.5rem 0.5rem;
  }

  .yosegi-FilterPill-pill:hover {
    background-color: #d4d2d0;
    box-shadow: inset 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.1);
  }

  .yosegi-FilterPill-pill:focus {
    background-color: #e4e2e0;
    box-shadow: inset 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.1), 0 0 0 2px #fff,
      0 0 0 3px #2557a7;
  }

  .yosegi-FilterPill-pill:active {
    background-color: #b4b2b1;
  }

  .yosegi-FilterPill-pill--active:active,
  .yosegi-FilterPill-pill--active:focus,
  .yosegi-FilterPill-pill--active:hover {
    background-color: #595959;
    border-color: #595959;
    color: #fff !important;
  }

  .yosegi-FilterPill-moreFilters {
    display: none;
  }

  .yosegi-FilterPill-dropdownPillContainer {
    position: relative;
    box-sizing: border-box;
    font-size: 0.8333rem;
    line-height: 1.3;
    border-spacing: 0;
    font: 0.625rem Arial, sans-serif;
  }

  .yosegi-FilterPill-pillLabel {
    width: max-content;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .yosegi-FilterPill-pillIcon {
    margin-left: 0.4rem;
    display: flex;
  }
  .yosegi-FilterPill-pillIcon {
    margin-left: 0;
    margin-right: 0.4rem;
  }

  .yosegi-FilterPill-dropdownList {
    top: 53px;
    left: 0;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 241px;
    background: #fff;
    border: 1px solid #ececec;
    box-sizing: border-box;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    z-index: 1000;
    display: none;
  }

  .yosegi-FilterPill-dropdownList {
    right: 0;
  }

  .yosegi-FilterPill-dropdownList.is-dropdownOpen {
    display: block;
  }

  .yosegi-FilterPill-dropdownListItem {
    box-sizing: border-box;
    list-style: none;
    cursor: pointer;
    background-color: #fff;
    line-height: 1.75rem;
    border: none;
  }

  .yosegi-FilterPill-dropdownListItem:hover {
    background-color: #eef1fe;
  }

  .yosegi-FilterPill-dropdownListItemLink {
    box-sizing: border-box;
    font-family: Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 0.875rem;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 1.43;
    line-height: 1.75rem !important;
    color: #2d2d2d !important;
    text-decoration: none !important;
    background: none;
    display: block;
    border: none;
    padding: 8px 16px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    margin: 0;
    outline: none;
  }
  [lang="ja"][dir] .yosegi-FilterPill-dropdownListItemLink {
    font-family: Hiragino Sans, Noto, Noto Sans CJK JP, Helvetica Neue,
      Helvetica, Arial, Liberation Sans, Roboto, sans-serif;
    font-size: 0.875rem;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 1.43;
    font-family: Hiragino Sans, Noto, Noto Sans CJK JP, Helvetica Neue,
      Helvetica, Arial, Liberation Sans, Roboto, sans-serif !important;
  }
  [dir="rtl"] .yosegi-FilterPill-dropdownListItemLink {
    text-align: right;
  }

  .yosegi-FilterPill-dropdownListItemLink:focus {
    outline: thin solid #2557a7;
  }
  .MuiButton-endIcon {
    display: inherit;
    /* margin-left: 8 px; */
    /* margin-right: -4 px; */
    float: right;
    color: #cf04a9;
  }
`;
