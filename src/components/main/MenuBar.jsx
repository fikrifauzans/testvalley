import React from 'react';

export default function MenuBar(props) {
  const { data } = props;

  return (

    <div className="  grid md:grid-cols-10 grid-cols-5 mx-auto  justify-center text-center md:container ">
      {/* {JSON.stringify(data)} */}
      {data.map((v, index) => (
        <div className=' mx-0  text-center'>
          <div>
            <img key={index} className="w-18 mt-10 p-4"  src={v.imageUrl} alt='' />
          </div>
          <div>
            <p>{v.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
