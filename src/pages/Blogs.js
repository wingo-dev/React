import { useState, useEffect } from "react";

const Blogs = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="container">
      <h1>Blog Articles</h1>
      <h2>It counted {count} times.</h2>
      <hr></hr>
      <div>
        {data &&
          data.map((item, id) => {
            return (
              <div key={id}>
                <h2>{item.title}</h2>
                <div>
                  <p>{item.body}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Blogs;
