import "./style.css"
import { IJumbotron } from "./nama";

function JumbotronSection(props : IJumbotron) {
    return (
        <div className="container">
         <h2> ini jumbo tron section (perubahan warna tidak direct)</h2>
         <p> Hello {props.name}</p>
        </div>
    );
}

export default JumbotronSection