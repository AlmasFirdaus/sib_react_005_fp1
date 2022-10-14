import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleProgramming } from "../features/article/articleSlice";
import ArticleFulfilled from "../component/ArticleFulfilled";
import ArticleTitle from "../component/ArticleTitle";
import IsPending from "../component/IsPending";

const ArticleProgrammingList = () => {
  const programmingState = useSelector((state) => state.article);
  const articleProgrammings = programmingState.entitiesProgramming;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleProgramming());
  }, [dispatch]);

  return (
    <>
      <section id="home" className="pt-24 pb-32 ">
        <div className="container px-20">
          {programmingState.isFetchPending && <IsPending />}
          {!programmingState.isFetchPending && <ArticleTitle title="programming" />}
          {programmingState.isFetchSuccess && (
            <div className="grid justify-center md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              {articleProgrammings.map((articleFetch, index) => (
                <ArticleFulfilled articleFetch={articleFetch} index={index} category="programming" key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ArticleProgrammingList;
