import './resume.scss'
import CV from './cv.pdf'



export function Resume(){
    return(
        <div className='resume'>
            <a download={CV}>
            <button className="resume-btn">Resume</button></a>
        </div>
        
    )
}