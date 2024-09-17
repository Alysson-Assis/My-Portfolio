import Image from "next/image"
import ImagePerfil from "./../../../../public/me.jpg"

import './header.scss'

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, I'am Alysson!!👋🏾</h1>

            <h2>Frontend Developer</h2>
          </div>
          <Image
            src={ImagePerfil}
            alt="Next.js logo"
            width={325}
            height={277}
            priority
        />
      </div>
    )
}