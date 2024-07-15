import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { languageNewsStart } from "../redux/actions/news.action";
import NewsItem from "../components/NewsItem";

export default function Language() {
  const newsLanguage = useSelector((state) => state.news.newsLanguage);
  const loading = useSelector((state) => state.news.loading);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const getNewsLanguage = useCallback(() => {
    dispatch(languageNewsStart(slug));
  }, [slug, dispatch]);
  useEffect(() => {
    getNewsLanguage();
  }, [getNewsLanguage]);
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
    <div>
      <div className="container mt-4">
        <div className="row ">
          {newsLanguage.length > 0 &&
            newsLanguage.map((n) => <NewsItem n={n} />)}
        </div>
      </div>
    </div>
  );
}
