export const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    margin: "4px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "100px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return <div style={cardStyle}>{children}</div>;
};
