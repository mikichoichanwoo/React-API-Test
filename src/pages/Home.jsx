import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Home(props) {
    const {data} = props;
    const [searchdata, setSearchData] =useState('');
    const [name, setName] = useState('');
    

    const filteredData = data.filter(item =>
        item.name.common.toLowerCase().includes(searchdata.toLowerCase())
      );
    console.log(data);
  return (
    <>
    <div className='container'>
       <input type="text" value={name} onChange={e => setName(e.target.value)}/>
       <button onClick={()=>setSearchData(name)}>Search</button>
        <ul className='countries'>
            {filteredData.map((item, i) => (
                 <li className='item' key={i}>
                    <Link to={`/Detail/${i}`}>
                    <img src={item.flags.svg} />
                    </Link>
                    <p>Population: {item.population}</p>
                    <p>Region: {item.region}</p>
                    <p>Capital: {item.capital}</p>
                   
                 </li>
            ))}
        </ul>
    </div>
    </>
  )
}
