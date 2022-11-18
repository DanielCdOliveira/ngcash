export default function ErrorComponent({ error }: any) {
  if (!error) return null;
  return <p style={{ color: "#f31", margin: "1rem 0" }}>{error}</p>;
}
