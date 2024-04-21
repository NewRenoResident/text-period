import React from "react";

export function useParseDate(date: string) {
  const calculateDateDifference = (date: string) => {
    const startDate = new Date(date);
    const endDate = new Date();

    const differenceInMilliseconds = endDate - startDate;

    const seconds = Math.floor(differenceInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };
  return calculateDateDifference(date);
}
