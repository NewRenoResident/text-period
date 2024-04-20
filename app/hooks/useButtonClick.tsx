import { useState } from "react";

export function useButtonClick() {
  const [buttonStatus, setButtonStatus] = useState(false);
  const handleButtonClick = async (event: any) => {
    event.stopPropagation();
    setButtonStatus((prev) => !prev);
  };
  const doNotHandleButtonClick = async (event: any) => {
    event.stopPropagation();
  };
  return { buttonStatus, handleButtonClick, doNotHandleButtonClick };
}
