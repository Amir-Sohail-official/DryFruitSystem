import BackgroundImage from "./BackgroundImage";
import FindFruit from "./FindFruit";
import Footer from "./Footer";
import Hero from "./Hero";
import Product from "./Product";
import Trending from "./Trending";

export default function Home(){
  return (
    <>
    <Hero></Hero>
    <BackgroundImage></BackgroundImage>
    <Product></Product>
    <FindFruit></FindFruit>
    <Trending></Trending>
    </>
  )
}