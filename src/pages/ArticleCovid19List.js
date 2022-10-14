import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleCovid19 } from "../features/article/articleSlice";
import ArticleFulfilled from "../component/ArticleFulfilled";
import ArticleTitle from "../component/ArticleTitle";
import IsPending from "../component/IsPending";

const ArticleCovid19List = () => {
  const covidState = useSelector((state) => state.article);
  const articleCovid19s = covidState.entitiesCovid19;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleCovid19());
  }, [dispatch]);

  return (
    <>
      <section id="home" className="pt-24 pb-32 ">
        <div className="container px-20">
          {covidState.isFetchPending && <IsPending />}
          {!covidState.isFetchPending && <ArticleTitle title="Covid-19" />}
          {covidState.isFetchSuccess && (
            <div className="grid justify-center md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              {articleCovid19s.map((articleFetch, index) => (
                <ArticleFulfilled articleFetch={articleFetch} index={index} category="Covid-19" key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ArticleCovid19List;
