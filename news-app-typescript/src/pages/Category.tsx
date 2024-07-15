import React, { useEffect, useCallback } from "react";
import NewsItem from "../components/NewsItem";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoryNewsStart } from "../redux/actions/news.action";
import { NewsInitialStateInterface } from "../redux/reducers/news.reducer";
export default function Category() {
  let { slug } = useParams();
  const categoryNews = useSelector(
    (state: NewsInitialStateInterface) => state.categoryNews
  );
  const dispatch = useDispatch();
  const getCategoriesNews = useCallback(() => {
    if (slug) {
      dispatch(categoryNewsStart(slug));
    }
  }, [dispatch, slug]);
  useEffect(() => {
    getCategoriesNews();
  }, [getCategoriesNews]);
  return (
    <div>
      <div className="container mt-4">
        <div className="row ">
          {categoryNews.length > 0 &&
            categoryNews.map((n,i) => <NewsItem n={n} i={i} />)}
        </div>
      </div>
    </div>
  );
}
