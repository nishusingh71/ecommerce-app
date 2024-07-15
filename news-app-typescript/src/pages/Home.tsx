import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsStart } from "../redux/actions/news.action";
import NewsItem from "../components/NewsItem";
import { NewsInitialStateInterface } from "../redux/reducers/news.reducer";
export default function Home() {
  const news = useSelector((state: NewsInitialStateInterface) => state.news);
  let dispatch = useDispatch();
  const getNews = useCallback(() => {
    dispatch(getNewsStart());
  }, [dispatch]);
  useEffect(() => {
    getNews();
  }, [news.length, getNews]);

  return (
    <div className="container mt-4">
      <div className="row ">
        {news.length > 0 ? (
          news.map((n, i) => <NewsItem n={n} i={i} />)
        ) : (
          <div className="container mt-4">
            <h1 className="text-danger">No News</h1>
          </div>
        )}
      </div>
    </div>
  );
}
