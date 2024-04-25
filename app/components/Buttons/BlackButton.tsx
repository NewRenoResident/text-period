interface Props {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  active?: boolean;
}

export default function BlackButton({ text, type, active }: Props) {
  return (
    <div className="flex justify-center items-center">
      <button
        type={type}
        disabled={!active}
        className={`${active ? "bg-black text-white" : "bg-[#333]"}  rounded-2xl px-2 py-1 font-bold`}
      >
        {text}
      </button>
    </div>
  );
}
