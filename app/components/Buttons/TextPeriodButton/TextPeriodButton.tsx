interface ITextPeriodButton {
  color: "blue" | "white";
  className?: string;
  width?: number;
  action?: () => void;
  children?: React.ReactNode;
}

const colors = {
  white: { bg: "white", text: "black" },
  blue: { bg: "#1d9bf0", text: "white" },
};
const TextPeriodButton = ({
  color,
  width,
  action,
  className,
  children,
}: ITextPeriodButton) => {
  return (
    <form action={action}>
      <div
        style={{
          width: width ? width : "fit-content",
          backgroundColor: colors[color].bg,
        }}
        className="px-2 py-1  rounded-full font-bold"
      >
        <button className="font-bold" type="submit">
          {label}
        </button>
      </div>
    </form>
  );
};

export default TextPeriodButton;
