import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div style={{ width: "100%", height: "0px" }}>
      <div
        className="card__right"
        style={{ color: "white", background: "white" }}
      ></div>

      {location.pathname === "/" && (
        <div className="animation relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-blue-950">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 rounded-full"
              style={{
                left: `${5 + i * 5.5}%`,
                width: `${6 + (i % 4) * 4}px`,
                height: `${6 + (i % 4) * 4}px`,
                background:
                  i % 2 === 0
                    ? "rgba(139, 92, 246, 0.6)"
                    : "rgba(96, 165, 250, 0.5)",
                animation: `drip ${3 + (i % 5)}s ease-in ${i * 0.4}s infinite`,
                filter: "blur(0.5px)",
              }}
            />
          ))}
          <style>{`
            @keyframes drip {
              0% { transform: translateY(-20px) scaleY(1); opacity: 0; }
              10% { opacity: 1; }
              70% { transform: translateY(60vh) scaleY(1.4); opacity: 0.8; }
              85% { transform: translateY(75vh) scaleY(2.2); opacity: 0.5; }
              95% { transform: translateY(80vh) scaleY(0.6) scaleX(2.5); opacity: 0.2; }
              100% { transform: translateY(82vh) scaleY(0); opacity: 0; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Navbar;
