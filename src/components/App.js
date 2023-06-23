import React, { useEffect, useState } from "react";

export default function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogImage(data.message))
      .then((data) => console.log(data));
  }, []);

  return <div>{dogImage ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}</div>;
}

// or alternative code snippet

//   if (!dogImage) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <img src={dogImage} alt="A Random Dog" />
//     </div>
//   );
//}
