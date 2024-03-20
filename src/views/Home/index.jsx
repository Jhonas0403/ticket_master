import Events from "../../components/events";
import { useState, useRef, useEffect } from "react";
import NavBar from "../../components/NavBar";
import useEventsData from "../../hooks/useEventsData";
import ReactPaginate from "react-paginate";

import styles from "./Home.module.css";
import useEventResults from "../../state/events-results";

const Home = () => {
  const { data, isLoading, error, fetchEvents } = useEventResults();
  const events = data?._embedded?.events || [];
  const page = data?.page || {};
  // const { events, isLoading, error, fetchEvents, page } = useEventsData();
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
  useEffect(() => {
    fetchEvents();
  }, []);

  const handleNavBarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  const renderEvents = () => {
    if (isLoading) {
      return <div>Cargando resultado..</div>;
    }
    if (error) {
      return <div>Ha ocurrido un errror</div>;
    }
    const handlePageClick = ({ selected }) => {
      fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
    };

    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disablePage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };
  return (
    <>
      <NavBar onSearch={handleNavBarSearch} ref={containerRef} />
      {renderEvents()}
    </>
  );
};

export default Home;
