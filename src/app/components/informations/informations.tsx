import Image from 'next/image'
import bazilFlag from './../../../../public/🇧🇷.svg'
import euaFlag from './../../../../public/🇺🇸.svg' 
import { SectionTitle } from '../sectionTitle/section-title'
import './information.scss'

export function Info(){
    return(
        <div className="infos">
          <SectionTitle text='Languages'/>
          <div className="languages-info">
          
            <span><Image
            src={bazilFlag}
            alt="brazilFlag"
            width={20}
            height={20}
            priority
        /> PT-BR - Native Speaker</span>
            <span><Image
            src={euaFlag}
            alt="brazilFlag"
            width={20}
            height={20}
            priority
        /> EN - Intermediary</span>
          </div>
          <SectionTitle text='Education'/>
          <div className="educatinal-info">
            <span>🎓</span>
            <span>Analise de Desenvolvimento de Sistemas - Senac São Paulo</span>
          </div>
          
        </div>
    )
}