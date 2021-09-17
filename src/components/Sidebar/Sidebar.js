import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <ul>
                <Link style={{textDecoration: "none"}} to="/"><li><i className="fa fa-home sidebar-icons"></i> <p className="sidebar-text">Home</p></li></Link>
                <Link style={{textDecoration: "none"}} to="/new"><li><i className="fa fa-plus-circle sidebar-icons"></i> <p className="sidebar-text">Add DAO</p></li></Link>
                <Link style={{textDecoration: "none"}} to="/learn"><li><i className="fa fa-info-circle sidebar-icons"></i> <p className="sidebar-text">Learn</p></li></Link>
            </ul>
        </div>
    )
}

export default Sidebar;