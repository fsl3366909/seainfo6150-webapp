import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
const Foo = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    /* search */
    async function fetchData() {
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
                console.log(Object.values(data[0]))
                setData(Object.values(data[0]))
            }).catch((err) => {
                console.log(err)
            }); // connection errors
    }
    return (
        <div>
            <h1>Product page</h1>
            <div className='mainlist' id='product'>
                <ul>
                    {
                        data.map((ele, index) => {
                            return (
                                <li key={index} className='fl'>
                                    <div className='pro'>
                                        <div className='png'>
                                            <img src={ele.image._url} alt="" />
                                        </div>
                                        <p className='txt btn-group'><span className='tit'>name:</span><span className='desc btn'>{ele.name}</span></p>
                                        <p className='txt btn-group'><span className='tit'>price:</span><span className='desc btn'>{ele.price}</span></p>
                                        <p className='txt btn-group'><span className='tit'>type:</span><span className='desc btn'>{ele.type}</span></p>
                                        <Link className='defaultbtn' to={`/detail/${index}`}>detail</Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Foo
