import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './order.css';
const Form = () => {
  const [data, setData] = useState([]);
  const [id, setid] = useState(0);
    const [phone, setphone] = useState('');
    const [areacode, setareacode] = useState('');
  const [username, setusername] = useState('');
  const [maindata, setmaindata] = useState([]);
  useEffect(() => {
    var maindata = localStorage.getItem('user');
    setData(JSON.parse(maindata));
    // fetch('https://run.mocky.io/v3/7a21bf9b-1ddb-42ca-9583-472e215c44e6', {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    // }).then(response => response.text())
    //   .then((response) => {
    //     // console.log(response.replace(/},/g, "}},"));
    //     var txt = response.replace(/},/g, "}},");/* 处理数组 */
    //     txt = txt.replace(/[\r\n]/g, "").replace(/[ ]/g, "");
    //     txt = '[' + txt.split('}},}')[0] + '}}}]'
    //     let data = JSON.parse(txt)
    //     setData(Object.values(data[0]))
    //     console.log(Object.values(data[0]))
    //   }).catch((err) => {
    //     console.log(err)
    //   }); // connection errors
  }, []);

  return (
    <div>
      <h1>Order Confirmation</h1>
      <div className='formbox mainline'>
        {
          data.map((ele) => {
            return (
              <div className='orderline btn-group'>
                <div className='png'><img src={ele.url}></img></div>
                <div className='contxt btn'>
                  <p><span>name:</span>{ele.name}</p>
                  <p><span>number:</span>{ele.number}</p>
                  <p><span>color:</span>{ele.color}</p>
                  <p><span>user name:</span>{ele.username}</p>
                        <p><span>mobile:</span>{ele.phone}</p>
                        <p><span>areacode:</span>{ele.areacode}</p>
                </div>
              </div>
            )
          })
        }

        {/* <div className='orderline btn-group'>
          <div className='png'>{data[1] ? <img src={data[1].image._url}></img> : ''}</div>
          <div className='contxt btn'>
            <p><span>name:</span>{data[1] ? data[1].name : ''}</p>
            <p><span>number:</span>4</p>
            <p><span>color:</span>red</p>
          </div>
        </div>
        <div className='orderline btn-group'>
          <div className='png'>{data[3] ? <img src={data[3].image._url}></img> : ''}</div>
          <div className='contxt btn'>
            <p><span>name:</span>{data[3] ? data[3].name : ''}</p>
            <p><span>number:</span>4</p>
            <p><span>color:</span>blue</p>
          </div>
        </div> */}
      </div>

    </div>
  )
}

export default Form
