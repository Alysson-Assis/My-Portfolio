import Image from 'next/image'
import { SectionTitle } from '../sectionTitle/section-title'
import './information.scss'

export function Info(){
    return(
        <div className="infos">
          <SectionTitle text='Languages'/>
          <div className="languages-info">
          
            <span>PT-BR - Native Speaker</span>
            <span>EN - Intermediary</span>
          </div>
          <SectionTitle text='Education'/>
          <div className="educatinal-info">
            <span>🎓</span>
            <span>Analise de Desenvolvimento de Sistemas - Senac São Paulo</span>
          </div>
          
        </div>
    )
}