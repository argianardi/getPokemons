import { Header } from "../components/Header";
import "../styles/App.css";

function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold text-red-100 underline">
        Hello world!
      </h1>
    </div>
  );
}

export default Home;
