import { useState, useEffect } from "react";
import ItemTypes from "./ItemTypes/ItemTypes";
import Card from "./Card/Card";
import Pagination from "./Pagination/Pagination";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import { ListWrapper, List } from "./itemList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../../redux/items/Services";

let filtered = [];

const ItemList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items.products);
  const activeFilter = useSelector(
    (state) => state.items.filteredItems.activeFilter
  );
  const status = useSelector((state) => state.items.status);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProductsAsync());
    }
  });

  filtered = products;
  if (activeFilter !== "all") {
    filtered = products.filter((item) =>
      activeFilter === "mugs"
        ? item.itemType === "mug" && item
        : item.itemType === "shirt" && item
    );
  }
  // get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const getCurrentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

  // change page
  const [pageNumberLimit] = useState(15);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(15);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <ListWrapper>
      <ItemTypes />
      <List>
        {status === "loading" && <Loading />}
        {status === "failed" && <Error />}
        <Card filtered={getCurrentItems} />
      </List>
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        itemsPerPage={itemsPerPage}
        totalItems={filtered.length}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        paginate={paginate}
      />
    </ListWrapper>
  );
};

export default ItemList;
