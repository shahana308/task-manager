import Board from "@/components/Board";
import Sidebar from "@/components/Sidebar";
import BoardHeader from "@/components/BoardHeader";

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <BoardHeader />
        <main className="flex-1 overflow-auto px-8 py-6">
          <Board />
        </main>
      </div>
    </div>
  );
}
