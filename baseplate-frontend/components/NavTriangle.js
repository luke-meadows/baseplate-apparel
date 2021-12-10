export default function NavTriangle({ coords }) {
  return (
    <svg
      className="blue-triangle"
      viewBox="0 0 100 100"
      style={{ left: coords }}
    >
      <polygon points="50 15, 100 100, 0 100" />
    </svg>
  );
}
