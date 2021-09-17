import {data} from '../../data';
import './NewDao.css';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const NewDao = () => {

    const initialState = {
        logo_link: '',
        full_name: '',
        description: '',
        category: '',
        TVL: '',
        date_founded: '',
        date_created: '',
        website: '',
        blockchain: '',
        headquarters: '',
        data_structure: '',
        voting_process: '',
        revenue_streams: ''
    };

    const [inputs, setInputs] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        data.push(inputs);
        setInputs(initialState);
        data.map((item, idx) => {
            item.id = idx;
            return item;
        })
    }

    return (
        <div className="container">
            <Navbar />
            <h4>Add New DAO</h4>
        <form className="">
            <label>Name:<input type="text" 
            value={inputs.full_name} 
            onChange={e => setInputs({...inputs, full_name: e.target.value})} 
            name='name'
            placeholder="Enter DAO Name"
            /></label>
             <label>Logo:<input type="text" 
            value={inputs.logo_link} 
            onChange={e => setInputs({...inputs, logo_link: e.target.value})} 
            name='logo'
            placeholder="Enter DAO logo site address"
            /></label>
             <label>Category:<input type="text" 
            value={inputs.category} 
            onChange={e => setInputs({...inputs, category: e.target.value})} 
            name='category'
            placeholder="Enter DAO Category"
            /> </label>
            <label>Website:<input type="text" 
            value={inputs.website} 
            onChange={e => setInputs({...inputs, website: e.target.value})} 
            name='website'
            placeholder="Enter DAO website"
            /></label>
             <label>Founded:<input type="date" 
            value={inputs.found} 
            onChange={e => setInputs({...inputs, date_founded: e.target.value})} 
            name='found'
            placeholder="Enter DAO Name"
            /></label>
             <label>Created On:<input type="date" 
            value={inputs.created} 
            onChange={e => setInputs({...inputs, date_created: e.target.value})} 
            name='created'
            placeholder="Enter DAO Name"
            /></label>
            <label>Description:<textarea
            rows={4}
            value={inputs.description}
            placeholder='Enter brief description'
            onChange={e => setInputs({...inputs, description: e.target.value})}
            /> </label>
             <label>Bloackchain:<input type="text" 
            value={inputs.blockchain} 
            onChange={e => setInputs({...inputs, blockchain: e.target.value})} 
            name='blockchain'
            placeholder="Enter blockchain name"
            /></label>
             <label>TVL:<input type="number" 
            value={inputs.tvl} 
            onChange={e => setInputs({...inputs, TVL: e.target.value})} 
            name='tvl'
            placeholder="Enter TVL value"
            /></label>
             <label>Headquarters:<input type="text" 
            value={inputs.headquarters} 
            onChange={e => setInputs({...inputs, headquarters: e.target.value})} 
            name='headquarters'
            placeholder="Enter DAO headquarters"
            /></label>
             <label>Voting Process<input type="text" 
            value={inputs.voting_process} 
            onChange={e => setInputs({...inputs, voting_process: e.target.value})} 
            name='voting_process'
            placeholder="Enter DAO voting process"
            /></label>
             <label>Data Structure<input type="text" 
            value={inputs.data_structure} 
            onChange={e => setInputs({...inputs, data_structure: e.target.value})} 
            name='data_structure'
            placeholder="Enter DAO Data Structure"
            /></label>
             <label>Revenue Streams<input type="text" 
            value={inputs.revenue_streams} 
            onChange={e => setInputs({...inputs, revenue_streams: e.target.value})} 
            name='revenue_streams'
            placeholder="Enter DAO revenue_streams"
            /></label>

            <button className='edit-btn' onClick={handleSubmit}>Submit</button>
        </form>
        {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
        </div>
    )
}

export default NewDao;