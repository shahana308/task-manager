import Board from "@/components/Board";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
      <main className="flex min-h-screen w-full items-center justify-between bg-white sm:items-start">
        <Sidebar />
        <Board />
      </main>
  );
}
