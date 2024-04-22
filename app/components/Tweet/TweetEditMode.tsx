import React from 'react';
import BlueButton from '../Buttons/BlueButton/BlueButton';

interface Props {
  setEditMode: any;
  action: any;
}

export default function TweetEditMode({ setEditMode, action }: Props) {
  return (
    <form
      action={(e) => action(e)}
      className="flex gap-4"
      onClick={(e: Event) => e.stopPropagation()}
    >
      <input
        name="content"
        className="bg-inherit border border-solid border-white rounded-sm"
        type="text"
      />
      <BlueButton onClick={() => setEditMode(false)} text="Apply" />
    </form>
  );
}
