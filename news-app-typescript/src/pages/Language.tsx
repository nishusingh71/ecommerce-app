import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { languageNewsStart } from "../redux/actions/news.action";
import NewsItem from "../components/NewsItem";
import { NewsInitialStateInterface } from "../redux/reducers/news.reducer";

export default function Language() {
  const newsLanguage = useSelector(
    (state: NewsInitialStateInterface) => state.newsLanguage
  );
  const { slug } = useParams();
  const dispatch = useDispatch();
  const getNewsLanguage = useCallback(() => {
    if (slug) {
      dispatch(languageNewsStart(slug));
    }
  }, [slug, dispatch]);
  useEffect(() => {
    getNewsLanguage();
  }, [getNewsLanguage]);
  return (
    <div>
      <div className="container mt-4">
        <div className="row ">
          {newsLanguage.length > 0 &&
            newsLanguage.map((n, i) => <NewsItem n={n} i={i} />)}
        </div>
      </div>
    </div>
  );
}
