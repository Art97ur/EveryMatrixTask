import { LeftSection } from "../components/leftSection/leftSection"
import { RightSection } from "../components/rightSection/rightSection"
import "./project.css"
export const Project = () =>{
    return (
        <div className="project-wrapper">
            <LeftSection/>
            <RightSection/>
        </div>
    )
}