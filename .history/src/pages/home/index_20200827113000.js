import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import HomePageFilter from "./index.filter";

// begin global components
import Container from "../../components/container";
import Content from "../../components/content";
import CardList from "../../components/card-list";
import InfiniteScroll from "../../components/infinite-scroll";
import HeroBanner from "../../components/hero-banner/index";
import ComponentHomePage from "../../components/pages/home";
// end global components

// begin service
import { useStore } from "../../reducers";
import imagePath from "../../services/image-path";
import service from "./index.service";
// end service

const Home = () => {
    return <ComponentHomePage></ComponentHomePage>;
};

export default Home;
