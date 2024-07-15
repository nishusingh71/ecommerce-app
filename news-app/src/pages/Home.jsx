import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsStart } from "../redux/actions/news.action";
import NewsItem from "../components/NewsItem";
export default function Home() {
  const news = useSelector((state) => state.news.news);
  const loading = useSelector((state) => state.news.loading);
  let dispatch = useDispatch();
  const getNews = useCallback(() => {
    dispatch(getNewsStart());
  }, [dispatch]);
  useEffect(() => {
    getNews();
  }, [news.length, getNews]);
  if (loading) {
    return <>
      <div className="spinner-container">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  }
  return (
    <div className="container mt-4">
      <div className="row ">
        {news.length > 0 ? (
          news.map((n, i) => <NewsItem n={n} key={i} />)
        ) : (
          <div className="container mt-4">
            <h1 className="text-danger">No News</h1>
          </div>
        )}
      </div>
    </div>
  );
}
