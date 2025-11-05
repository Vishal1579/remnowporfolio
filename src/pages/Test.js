import React, { useEffect, useState } from 'react';

function Test() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/websitedetail/1')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
     <br/><br/>
      <h2>Website Detail</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Test;
