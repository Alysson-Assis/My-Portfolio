import { GitHubIcon } from "./../icons/github-icon"
import { InstaIcon } from "./../icons/insta-icon"
import { LinkedInIcon } from "./../icons/linkedin-icon"

import './social-btns.scss'

export function SocialBtn(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/alyssonassis_ofc/" target="_blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/alysson-assis-santos/" target="_blank">
            <LinkedInIcon/>
            </a>
            <a href="https://github.com/Alysson-Assis" target="_blank">
                <GitHubIcon/>
            </a>
                
        </div>
    )
}