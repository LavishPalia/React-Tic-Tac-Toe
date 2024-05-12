const PlayerDetail = ({
  playerName,
  playerSymbol,
}: {
  playerName: string;
  playerSymbol: string;
}) => {
  return (
    <li>
      <span className="border-2 border-transparent border-opacity-100 p-2 rounded-[4px] font-bold">
        <span className="inline-block w-40 text-[1rem] text-[#e1dec7] uppercase m-0 p-2 rounded-[4px] text-ellipsis text-center">
          {playerName}
        </span>
        <span className="ml-4 text-[1rem] text-[#e1dec7]">{playerSymbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
};

export default PlayerDetail;
