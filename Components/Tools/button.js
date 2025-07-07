export default function Button({ bgColor, textColor, borderColor }) {
  return (
    <button
      style={{
        "--bg-color": bgColor,
        "--text-color": textColor,
        "--border-color": borderColor,
      }}
      className="w-35 h-10 text-[.7rem] tracking-wide font-bold text-[var(--text-color)] bg-[var(--bg-color)] border-2 border-[var(--border-color)]"
    >
      SEE PRODUCT
    </button>
  );
}
