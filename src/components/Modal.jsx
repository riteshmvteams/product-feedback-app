export default function Modal({ children, visible, setVisible }) {
  return (
    <div
      className={`items-center justify-center fixed top-0 left-0 w-full h-screen ${
        visible ? "flex" : "hidden"
      }`}
    >
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black/50 z-10"
        onClick={() => setVisible(false)}
      ></div>
      {children}
    </div>
  );
}
