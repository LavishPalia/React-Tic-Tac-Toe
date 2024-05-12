import Header from "./components/Header";
import PlayerDetail from "./components/PlayerDetail";

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="max-w-[45rem] mx-auto my-12 rounded-md bg-gradient-to-br from-yellow-900 to-yellow-800 shadow-custom relative">
          <ol className="p-0 flex items-center justify-center gap-8 mx-0 my-4 list-none">
            <PlayerDetail playerName="Player 1" playerSymbol="X" />
            <PlayerDetail playerName="Player 2" playerSymbol="O" />
          </ol>
        </div>
      </main>
    </div>
  );
}

export default App;
