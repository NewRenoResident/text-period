import React from "react";

interface Props {
  empty: boolean;
  ref: (node?: Element | null | undefined) => void;
}

export default function NoTweets({ empty, ref, setLoadMore }: Props) {
  return (
    <div>
      {empty ? (
        <div className="mx-auto w-fit p-10">No tweets</div>
      ) : (
        <div className="m-auto w-fit" ref={ref}>
          <button
            type="button"
            onClick={() => {
              setLoadMore((prev) => prev + 1);
            }}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
