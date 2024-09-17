import { Buttons } from "./components/buttons/buttons";
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Infos } from "./components/infos/infos";
import './styles/home.scss'


export default function Home() {
  return (
      <main className="container">
        <Header/>
        <Experience/>
        <Infos/>
        <Buttons/>
      </main>
  );
}
/* image 1786 */



