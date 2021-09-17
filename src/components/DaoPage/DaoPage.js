import './DaoPage.css'
import { data } from '../../data';
import { Link, useParams } from 'react-router-dom';

const DaoPage = () => {
    const {id} = useParams();
    const details = data.filter(item => item.id == id);

      const numberWithCommas = (x) => {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    return (
        <div className="daopage">
            {details.map(item =>( 
            <div>
                <nav className='navbarr'>
                <Link to="/"><h2 className="logo" style={{color:'white', paddingLeft: '10px', fontSize: '25px'}}
><i className="fa-fa-grav"></i> DAOfind.com</h2></Link>
      <input 
            type="text"
            placeholder='Search DAO'
            value={null}
            className="searchbarr" />
      <Link to={`/${item.id}/edit`}>
      <button style={{padding: "10px 20px", cursor: 'pointer'}} className='connect-wallett'>Edit DAO</button></Link>
        </nav>
            <div className="grid">
                <div className="left">
                        <div className='left-flex'>
                        <img src={item.logo_link} alt="logo" />
                        <h1 className="daoname">{item.full_name}</h1>
                        </div>
                        <h1 className="span"><span>Category:</span>{item.category}</h1>
                        <h1 className="span"><span>Blockchain:</span>{item.blockchain}</h1>
                       <h1 className="span"> <span>Total Value Locked (TVL):</span>${numberWithCommas(item.TVL)}</h1>
                        <h1 className="span"><span>Website:</span>{item.website}</h1>
                        <h1 className="span"> <span>Founded:</span>{item.date_founded}</h1>
                        <h1 className="span"> <span>Headqurarters:</span>{item.headquarters}</h1>
                </div>
                <div className="right">
                        <span>Description:</span><h1 className="description">{item.description}</h1>
                        <h1 className="span"> <span>Date Created:</span>{item.date_created}</h1>
                </div>
            </div>
            </div>))}</div>
    )
}

export default DaoPage;