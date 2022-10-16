import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleFulfilled from "../organisme/ArticleFulfilled";
import ArticleTitle from "../organisme/ArticleTitle";
import IsPending from "../organisme/IsPending";
import { useLocation } from "react-router-dom";
import { fetchArticle } from "../../features/article/articleSlice";

const PagesArticles = () => {
  const fetchStates = useSelector((state) => state.article);
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  useEffect(() => {
    dispatch(fetchArticle(location));
  }, [location, dispatch]);

  return (
    <>
      <section id="home" className="pt-24 pb-32">
        <div className="container px-10 xl:px-20">
          {fetchStates.isFetchPending && <IsPending />}
          {!fetchStates.isFetchPending && <ArticleTitle title={location === "/" ? "indonesia" : location.substring(1)} />}
          {fetchStates.isFetchSuccess && (
            <div className="grid justify-center md:grid-cols-2 md:gap-8 xl:grid-cols-4">
              {fetchStates.entitiesFetch.map((articleFetch, index) => (
                <ArticleFulfilled articleFetch={articleFetch} index={index} category="Indonesia" key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PagesArticles;
