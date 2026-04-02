export function Button({ text }) {
  return (
    <button style={{
      padding: "12px 20px",
      marginTop: "20px",
      background: "white",
      color: "black",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer"
    }}>
      {text}
    </button>
  );
}
