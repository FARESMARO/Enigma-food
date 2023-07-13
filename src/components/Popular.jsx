import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

function Popular() {
  const [Pruduct, setPruduct] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.spoonacular.com/recipes/random?api_Key=68bfe5b3bfbb417c8f6908f779e44415&number=9"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setPruduct(res?.data?.recipe);
  //     });
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setPruduct(res);
  //     });
  // }, []);

  useEffect(() => {
    GetPopular();
  }, []);
  const API_KEY = "68bfe5b3bfbb417c8f6908f779e44415";
  const GetPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?api_key=${API_KEY}`
    );
    const data = await api.json();
    console.log(data);
  };

  // useEffect(() => {
  //   const GetPopular = async () => {
  //     try {
  //       const response = await fetch(
  //         " `https://api.spoonacular.com/recipes/complexSearch?api_key=${API_KEY}&number=10`"
  //       );
  //       const responseData = await response.json();
  //       console.log(responseData);
  //     } catch (error) {
  //       console.log("Error:", error);
  //     }
  //   };
  //   GetPopular();
  // }, []);

  return (
    <main>
      {/* <>
        {" "}
        {Pruduct.map((e) => {
          return <Card />;
        })}
      </> */}
    </main>
  );
}

export default Popular;
