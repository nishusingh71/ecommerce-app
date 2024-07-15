import React, { useEffect, useCallback } from "react";
import NewsItem from "../components/NewsItem";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoryNewsStart } from "../redux/actions/news.action";
export default function Category() {
  let { slug } = useParams();
  const categoryNews = useSelector((state) => state.news.categoryNews);
  const loading = useSelector((state) => state.news.loading);
  const dispatch = useDispatch();
  const getCategoriesNews = useCallback(() => {
    dispatch(categoryNewsStart(slug));
  }, [dispatch, slug]);
  useEffect(() => {
    getCategoriesNews();
  }, [getCategoriesNews]);
  if (loading) {
    return (
      <>
        <div className="spinner-container">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="container mt-4">
        <div className="row ">
          {categoryNews.length > 0 &&
            categoryNews.map((n) => <NewsItem n={n} />)}
        </div>
      </div>
    </div>
  );
}
