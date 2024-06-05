import {memo} from "react";

const TarifsSvg: React.FC = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" stroke="#7179B8"/>
      <path d="M11.8125 6.75H6.1875" stroke="#7179B8" />
      <path d="M11.8125 11.25H6.1875" stroke="#7179B8" />
    </svg>
  )
}

export default memo(TarifsSvg);