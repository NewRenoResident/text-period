import React, { useState } from 'react';
import BlueButton from '../Buttons/BlueButton/BlueButton';

interface Props {
  action: any;
  defaultText: string;
}

export default function TweetEditMode({  action, defaultText }: Props) {
  const [text, setText] = useState(defaultText);
  return (
    <form
      action={(e) => action(e)}
      className="flex gap-4"
      onClick={(e: Event) => e.stopPropagation()}
    >
      <input
        name="content"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-inherit border border-solid border-white rounded-sm"
        type="text"
      />
      <BlueButton type="submit" text="Apply" active={(text.length > 0)} />
    </form>
  );
}
