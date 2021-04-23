import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './order.css';
const Form = () => {
  const [data, setData] = useState([]);
  const [id, setid] = useState(0);
    const [phone, setphone] = useState('');
    const [areacode, setareacode] = useState('');
  const [username, setusername] = useState('');
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
        setData(Object.values(data[0]))
        console.log(data)
      }).catch((err) => {
        console.log(err)
      }); // connection errors
  }, []);

  return (
    <div>
      <h1>Order</h1>
      <div className='formbox'>
        <div className='pngbox'>
          {
            data.length != 0 ? (
              <img className='png' src={data[id].image._url} alt="" />
            ) : ''
          }
        </div>
        <div className='btn-group line'>
          <span>name</span>

          <div className='input btn'>
            <select name="" id="" className='name' onChange={(ele) => {
              console.log(ele.target.value)
              console.log(data[ele.target.value].name)
              setid(ele.target.value)
            }}>
              {
                data.map((ele, index) => {
                  return (
                    <option key={index} value={index} >{ele.name}</option>
                    // <li key={index} className='fl'>
                    //   <div className='pro'>
                    //     <div className='png'>
                    //       <img src={ele.image._url} alt="" />
                    //     </div>
                    //     <p className='txt'>name:{ele.name}</p>
                    //     <p className='txt'>price:{ele.price}</p>
                    //     <p className='txt'>type:{ele.price}</p>
                    //     <Link className='defaultbtn' to={`/detail/${index}`}>Buy</Link>
                    //   </div>
                    // </li>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className='btn-group line'>
          <span>number</span>
          <div className='input btn'>
            <select name="" id="" className='number'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className='btn-group line'>
          <span>username</span>
          <div className='input btn'>
            <input type="text" className='username' placeholder='input username' value={username} onChange={
              (e) => {
                setusername(e.target.value);
              }
            } />
          </div>
        </div>
        <div className='btn-group line'>
          <span>phone</span>
          <div className='input btn'>
            <input type="number" className='phone' placeholder='only figures' value={phone}
              onChange={
                (e) => {
                  setphone(e.target.value);
                }
              }
            />
          </div>
              </div>
              <div className='btn-group line'>
                  <span>areacode</span>
                  <div className='input btn'>
                      <input type="number" className='areacode' placeholder='only figures' value={areacode}
                          onChange={
                              (e) => {
                                  setareacode(e.target.value);
                              }
                          }
                      />
                  </div>
              </div>

        <div className='btn-group line'>
          <span>color</span>
          <div className='input btn'>
            <input type="radio" name='color' value='white' />white&nbsp;&nbsp;
            <input type="radio" name='color' value='black' />black&nbsp;&nbsp;
            <input type="radio" name='color' value='purple' />purple&nbsp;&nbsp;
            <input type="radio" name='color' value='blue' />blue&nbsp;&nbsp;
          </div>
        </div>
        <div className='btn-group line'>
          <span>gender</span>
          <div className='input btn'>
            <input type="radio" name='gender' value='male' />male&nbsp;&nbsp;
            <input type="radio" name='gender' value='female' />female&nbsp;&nbsp;
          </div>
        </div>
        <a className='defaultbtn' onClick={() => {
          var user = /^[a-zA-Z]+$/.test(username);
          var color = '';
          var gender = '';
          console.log(user)
          if (!user || /^1[3456789]d{9}$/.test(phone)) {
            alert('error');
            setusername('');
            setphone('');
            return false;
          }

          var colordom = document.querySelector('input[name="color"]:checked');
          var genderdom = document.querySelector('input[name="gender"]:checked');
          var name = data[id].name;
          var number = document.querySelector('.number').value;
          var username = document.querySelector('.username').value;
                  var phone = document.querySelector('.phone').value;
                  var areacode = document.querySelector('.areacode').value;

          colordom ? color = colordom.value : color = '';
          genderdom ? gender = genderdom.value : gender = '';
          console.log(name);
          console.log(color);
          console.log(gender);
          var localdata = localStorage.getItem('user');
          if (localdata == null) {
              var maindata = [{ name: name, number: number, username: username, phone: phone, areacode: areacode, color: color, gender: gender, url: data[id].image._url }]
            console.log(JSON.stringify(maindata));
            localStorage.setItem('user', JSON.stringify(maindata));
          } else {
            var basedata = JSON.parse(localdata);
              var maindata = { name: name, number: number, username: username, phone: phone, areacode: areacode, color: color, gender: gender, url: data[id].image._url }
            basedata = [...basedata, maindata];
            localStorage.setItem('user', JSON.stringify(basedata));
          }
          alert('success')
        }}>submit</a>
      </div>

    </div>
  )
}

export default Form
