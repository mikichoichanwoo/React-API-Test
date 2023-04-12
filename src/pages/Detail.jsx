import React from 'react'
import { useParams } from 'react-router-dom'
export default function Detail(props) {
    const params = useParams();
    console.log(params);
    const id = parseInt(params.id);
    const country = props.data[id];
  return (
    <>
    <div>
       <h1>Detail</h1>
       <div>
       {
        props.data.length > 0 ?
            <div className='detail-box'>
                <div className='img-box'>
                <img src={country.flags.svg} />
                </div>
                <div className='font-box'>
                <p>Population:{country.population}</p>
                <p>Region:{country.region}</p>
                <p>Capital:{country.capital}</p>
                <p>Sub Region:{country.subregion}</p>
                <p>Top Level Domain:{country.altSpellings[0]}</p>
                </div>
            </div>
             :null
        }
        </div>
    </div>
    </>
  )
}
