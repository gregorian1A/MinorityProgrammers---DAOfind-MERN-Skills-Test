import './EditDao.css';
import { useState } from 'react';
import { data } from '../../data';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';

const EditDao = () => {
    const { id } = useParams();
    const daoToEdit = data.filter(item => item.id == id);
    console.log(daoToEdit.map(item => item.logo_link)[0])

    const initialState = {
        id: daoToEdit.map(item => item.id).toString(),
        logo_link: daoToEdit.map(item => item.logo_link).toString(),
        full_name: daoToEdit.map(item => item.full_name).toString(),
        description: daoToEdit.map(item => item.description).toString(),
        category: daoToEdit.map(item => item.category).toString(),
        TVL: daoToEdit.map(item => item.TVL).toString(),
        date_founded: daoToEdit.map(item => item.date_founded).toString(),
        date_created: daoToEdit.map(item => item.date_created).toString(),
        website: daoToEdit.map(item => item.website).toString(),
        blockchain: daoToEdit.map(item => item.blockchain).toString(),
        headquarters: daoToEdit.map(item => item.headquarters).toString(),
        data_structure: daoToEdit.map(item => item.dao_structure).toString(),
        voting_process: daoToEdit.map(item => item.voting_process).toString(),
        revenue_streams: daoToEdit.map(item => item.revenue_streams).toString(),
    };

    const [inputs, setInputs] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        data.map((item) => item.id == id ? data.splice(id, 1, inputs) : null)
    }

    return (
        <div className="editdao">
       { daoToEdit.map(item => (
            <div className="container">
            <Navbar />
            <h4>Edit DAO</h4>
        <form className="">
            <label>Name:
            <input type="text" 
            value={inputs.full_name} 
            onChange={e => {setInputs({...inputs, full_name: e.target.value})}} 
            name='name'
            placeholder="Edit DAO Name"
            /></label>
             <label>Logo:
                 <input type="text" 
            value={inputs.logo_link} 
            onChange={e => setInputs({...inputs, logo_link: e.target.value})} 
            name='logo'
            placeholder="Edit DAO logo site address"
            /></label>
             <label>Category:
                 <input type="text" 
            value={inputs.category} 
            onChange={e => setInputs({...inputs, category: e.target.value})} 
            name='category'
            placeholder="Enter DAO Category"
            /> </label>
            <label>Website:
                <input type="text" 
            value={inputs.website} 
            onChange={e => setInputs({...inputs, website: e.target.value})} 
            name='website'
            placeholder="Edit DAO website"
            /></label>
             <label>Founded:
                 <input type="date" 
            value={inputs.date_founded} 
            onChange={e => setInputs({...inputs, date_founded: e.target.value})} 
            name='found'
            placeholder="Edit DAO Name"
            /></label>
             <label>Created On:<input type="date" 
            value={inputs.date_created} 
            onChange={e => setInputs({...inputs, date_created: e.target.value})} 
            name='created'
            placeholder="Enter DAO Name"
            /></label>
            <label>Description:<textarea
            rows={4}
            value={inputs.description}
            placeholder='Edit description'
            onChange={e => setInputs({...inputs, description: e.target.value})}
            /> </label>
             <label>Bloackchain:<input type="text" 
            value={inputs.blockchain} 
            onChange={e => setInputs({...inputs, blockchain: e.target.value})} 
            name='blockchain'
            placeholder="Edit blockchain name"
            /></label>
             <label>TVL:<input type="number" 
            value={inputs.TVL} 
            onChange={e => setInputs({...inputs, TVL: e.target.value})} 
            name='tvl'
            placeholder="Edit TVL value"
            /></label>
             <label>Headquarters:<input type="text" 
            value={inputs.headquarters} 
            onChange={e => setInputs({...inputs, headquarters: e.target.value})} 
            name='headquarters'
            placeholder="Edit DAO headquarters"
            /></label>
             <label>Voting Process<input type="text" 
            value={inputs.voting_process} 
            onChange={e => setInputs({...inputs, voting_process: e.target.value})} 
            name='voting_process'
            placeholder="Edit DAO voting process"
            /></label>
             <label>Data Structure<input type="text" 
            value={inputs.data_structure} 
            onChange={e => setInputs({...inputs, data_structure: e.target.value})} 
            name='data_structure'
            placeholder="Edit DAO Data Structure"
            /></label>
             <label>Revenue Streams<input type="text" 
            value={inputs.revenue_streams} 
            onChange={e => setInputs({...inputs, revenue_streams: e.target.value})} 
            name='revenue_streams'
            placeholder="Edit DAO revenue_streams"
            /></label>
            <button type="submit" onClick={handleSubmit} className="edit-btn">Edit</button>
        </form>
        <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
        ))}
        </div>
    )
}

export default EditDao;