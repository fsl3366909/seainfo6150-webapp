import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './index.css';
const Detail = (props) => {
    const [data, setData] = useState({
        image: { _url: '' },
        name: '',
        price: '',
        type: ''
    });
    console.log(props.match.params.uid)
    useEffect(() => {
        fetch('https://run.mocky.io/v3/7a21bf9b-1ddb-42ca-9583-472e215c44e6', {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
        }).then(response => response.text())
            .then((response) => {
                // console.log(response.replace(/},/g, "}},"));
                var txt = response.replace(/},/g, "}},");/* 处理数组 */
                txt = txt.replace(/[\r\n]/g, "").replace(/[ ]/g, "");
                txt = '[' + txt.split('}},}')[0] + '}}}]'
                console.log(JSON.parse(txt))
                let data = JSON.parse(txt)
                setData(Object.values(data[0])[props.match.params.uid])
                console.log(Object.values(data[0])[props.match.params.uid])
            }).catch((err) => {
                console.log(err)
            }); // connection errors
    }, []);
    return (
        <div className='detail'>
            <h1>Detail</h1>{/* {data.image._url} */}
            <img className='pngblock' src={data.image._url} alt="" />
            <div className='contxt'>
                <p className='txt'>name:{data.name}</p>
                <p className='txt'>price:{data.price}</p>
                <p className='txt'>type:{data.type}</p>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Detail
