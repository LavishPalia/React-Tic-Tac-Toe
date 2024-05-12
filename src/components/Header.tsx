const Header = () => {
  return (
    <header className="text-center">
      <img
        src="/game-logo.png"
        alt="tic-tac-toe image"
        className="w-32 object-contain mx-auto mb-4 mt-12 drop-shadow-custom"
      />
      <h1 className="font-caprasimo text-5xl mt-0 mb-12 mx-auto text-[#3f3b00]">
        Tic Tac Toe
      </h1>
    </header>
  );
};

export default Header;
