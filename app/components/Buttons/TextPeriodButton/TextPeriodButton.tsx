interface ITextPeriodButton {
  color: "blue" | "white" | "grey";
  className?: string;
  width?: number | string;
  action?: () => void;
  children: React.ReactNode;
}

const colors = {
  white: { bg: "white", text: "black" },
  blue: { bg: "#1d9bf0", text: "white" },
  grey: { bg: "#1f2937", text: "white" },
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
        className="px-2 py-1 rounded-full font-bold"
      >
        <button className="font-bold" type="submit">
          {children}
        </button>
      </div>
    </form>
  );
};

export default TextPeriodButton;
