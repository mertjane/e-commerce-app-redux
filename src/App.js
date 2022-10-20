import React from "react";
import Header from "./components/Header/Header";
import Sorting from "./components/Sidebar/Sorting/Sorting";
import Brands from "./components/Sidebar/BrandsFilter/Brands";
import Tags from "./components/Sidebar/TagsFilter/Tags";
import ItemList from "./components/ItemList/ItemList";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { MainWrapper } from "./root-styles/App.styled";
import { SideBarWrapper } from "./root-styles/App.styled";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <SideBarWrapper>
          <Sorting />
          <Brands />
          <Tags />
        </SideBarWrapper>
        <ItemList />
        <Cart />
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;
