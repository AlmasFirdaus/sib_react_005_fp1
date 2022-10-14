import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleIndonesia } from "../features/article/articleSlice";
import ArticleFulfilled from "../component/ArticleFulfilled";
import ArticleTitle from "../component/ArticleTitle";
import IsPending from "../component/IsPending";

const ArticleIndonesiaList = () => {
  const indonesiaState = useSelector((state) => state.article);
  const articleIndonesias = indonesiaState.entitiesIndonesia;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleIndonesia());
  }, [dispatch]);

  return (
    <>
      <section id="home" className="pt-24 pb-32">
        <div className="container px-20">
          {indonesiaState.isFetchPending && <IsPending />}
          {!indonesiaState.isFetchPending && <ArticleTitle title="Indonesia" />}
          {indonesiaState.isFetchSuccess && (
            <div className="grid justify-center md:grid-cols-2 md:gap-8 xl:grid-cols-4">
              {articleIndonesias.map((articleFetch, index) => (
                <ArticleFulfilled articleFetch={articleFetch} index={index} category="Indonesia" key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ArticleIndonesiaList;
