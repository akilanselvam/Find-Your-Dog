import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
  const maxNumber = 264;
  const randomNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log(randomNumber);
  const { id } = useParams();
  const [post, setPost] = useState({
    weight: { imperial: "6 - 13", metric: "3 - 6" },
    height: { imperial: "", metric: "23 - 29" },
    id: 1,
    name: "",
    bred_for: "",
    breed_group: "",
    life_span: "",
    temperament: "",
    origin: "",
    reference_image_id: ""
  });
  const [picPost, setPicPost] = useState({
    id: "...",
    url: "..."
  });

  useEffect(() => {
    async function getPost() {
      try {
        const response = await axios.get(
          `https://api.thedogapi.com/v1/breeds/${randomNumber}`
        );
        console.log(response.data);
        setPost(response.data);
      } catch (e) {
        console.log("There was an error");
      }
    }
    getPost();
  }, [id]);

  useEffect(() => {
    async function getPicPost() {
      try {
        const response = await axios.get(
          `https://api.thedogapi.com/v1/images/${post.reference_image_id}`
        );
        console.log(response.data);
        setPicPost(response.data);
      } catch (e) {
        console.log("There was an error");
      }
    }
    getPicPost();
  }, [post.reference_image_id]);

  return (
    <div class="container">
      <br />
      <br />
      <br />
      <div class="content">
        <div class="content-img">
          <img src={picPost.url} alt="BigCo Inc. logo" />
        </div>
        <div class="content-text">
          <h2 class="content-title">{post.name}</h2>
          <h4 class="content-subtitle">{post.bred_for}</h4>
          <p class="content-paragraph">
            Weight in Imperial {post.weight.imperial} and Metric{" "}
            {post.weight.metric}
          </p>
          <p class="content-paragraph">
            {" "}
            Height in Imperial {post.height.imperial} and Metric{" "}
            {post.height.metric}
          </p>
          <p class="content-paragraph">Temperament: {post.temperament}</p>
          <p class="content-paragraph">Origin: {post.origin}</p>
          <p class="content-paragraph">Life Span: {post.life_span}</p>
          <p class="content-paragraph">Breed Group: {post.breed_group}</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
