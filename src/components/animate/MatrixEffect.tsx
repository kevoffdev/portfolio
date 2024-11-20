import './MatrixEffect.css';

const MatrixEffect = () => {
  return (
    <div className="software-developer">
      <div className="matrix-effect">
        {Array.from({ length: 50 }).map((_, index) => (
          <span
            key={index}
            className="matrix-symbol"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {String.fromCharCode(0x30a0 + Math.random() * 96)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MatrixEffect;
