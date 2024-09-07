const Attribution = ({ className }) => {
  return (
    <footer className={className}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>{" "}
      Coded by{" "}
      <a
        href="https://github.com/CemWebDev"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-clip-text text-transparent bg-gradient-to-r from-primary-neonGreen to-primary-lightCyan font-bold"
      >
        CemWebDev
      </a>
      .
    </footer>
  );
};

export default Attribution;
