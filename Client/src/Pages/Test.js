import React, { useState } from 'react'

const Test = () => {
    const [data, setData] = useState();
    console.log(data);

  return (
    <div>
      <input id="img" type="file" accepts="image/png, image/jpeg" onChange={(e) => setData(e.target.files)}/>
    </div>
  )
}

export default Test
