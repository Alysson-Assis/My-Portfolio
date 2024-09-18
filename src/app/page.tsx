
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info  } from "./components/informations/informations";
import './styles/home.scss'
import { SocialBtn } from "./components/social-btn/social-btns";
import { EmailIcon } from "./components/icons/email-icon";
import { Resume } from "./components/resume/resume";

declare module "*.pdf";

export default function Home() {
  return (
      <main className="container">
        <Header/>
        <Experience/>
        <Info/>
        <Resume/>
        <div className="buttons">
            <SocialBtn/>
            <a className="btn-primary" href="mailto:alyssonassissantos@gmail.com">
              contact me
              <EmailIcon/>
            </a>
          </div>
        
      </main>
  );
}
/* image 1786 */



