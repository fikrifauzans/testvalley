import React, { useEffect, useState } from 'react'
import './App.css';

import Navbar from './components/main/Navbar';
import Banner from './components/main/Banner';
import MenuBar from './components/main/MenuBar';
import Product from './components/main/Product';

function App() {
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])

  async function fetchAPI1() {
    const response = await fetch("https://api.testvalley.kr/main-banner/all");
    const res = await response.json();
    setData1(res)
  }
  async function fetchAPI2() {
    const response = await fetch("https://api.testvalley.kr/main-shortcut/all");
    const res = await response.json();
    setData2(res)
  }
  async function fetchAPI3() {
    const response = await fetch("https://api.testvalley.kr/collections?prearrangedDiscount");
    const res = await response.json();
    setData3(res)
  }

  useEffect(() => {
    fetchAPI1()
    fetchAPI2()
    fetchAPI3()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Banner data={data1 ?? []} />
      <MenuBar data={data2 ?? []} />
      <Product data={data3 ?? []} />

    </div>
  );
}

export default App;
