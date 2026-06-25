import styles from './Marquee.module.css';

const Marquee = () => {
  const items = Array(10).fill('HALO TETANGGA • KOPI SUSU TETANGGA • TOKO KOPI TUKU • ');

  return (
    <div className="marquee">
      <div className="marqueeContent">
        {items.map((text, i) => (
          <span key={i} className="marqueeItem">{text}</span>
        ))}
      </div>
      <div className="marqueeContent">
        {items.map((text, i) => (
          <span key={i} className="marqueeItem">{text}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
