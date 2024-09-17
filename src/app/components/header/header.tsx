import Image from "next/image"
import ImagePerfil from "./../../../../public/PhotoPerfil.png"

import './header.scss'

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, I'am Alysson!!👋</h1>

            <h2>Frontend Developer</h2>
          </div>
          <Image
            src={ImagePerfil}
            alt="Next.js logo"
            width={300}
            height={300}
            priority
        />
      </div>
    )
}