import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container1">
      <div className="Profile">
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="ImageMain"
          height={500}
          width={300}
        />
      </div>
      <div className="content">
      <p>Hi There !!!</p>
        <h2>Shivam Gaur</h2>
        <b>Fontend Developer</b>
        <p>Lorem ipsum dolor sit amet orem ipsum dolor sit amet  consectetur adipisicing elit. Sed inventore itaque dolorum doloribus nihil voluptas eligendi? Nam voluptatibus esse dolore illum nihil laborum facere tenetur quos, et fugiat ea itaque commodi quis dolorem ducimus obcaecati labore eligendi beatae aliquam vitae id aspernatur officiis magni quidem. Numquam eligendi ducimus minima cumque error quidem natus sed non excepturi? Sit quos dolorem perferendis assumenda voluptatibus fugit at quasi sint quod, praesentium aspernatur eius maiores repellendus voluptate a! Natus nobis est incidunt ea deleniti, consequatur veniam, et quas eum, iste nesciunt veritatis! Vero ullam eos in sed quas sunt expedita libero explicabo iusto labore.</p>
        <button className="btn1">Explore More</button>

      </div>
    </div>
  );
};

export default Home;

