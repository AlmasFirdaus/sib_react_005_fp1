import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArticleFulfilled from "../component/ArticleFulfilled";
import ArticleTitle from "../component/ArticleTitle";
import IsPending from "../component/IsPending";

const ArticleSearchList = () => {
  const searchState = useSelector((state) => state.article);
  const articleSearchs = searchState.entitiesSearch;
  const { search } = useParams();

  return (
    <>
      <section id="home" className="pt-36 pb-32">
        <div className="container px-20">
          {searchState.isFetchPending && <IsPending />}
          {!searchState.isFetchPending && <ArticleTitle title={search} />}
          {searchState.isFetchSuccess && (
            <div className="grid justify-center md:grid-cols-4 md:gap-5">
              {articleSearchs.map((articleFetch, index) => (
                <ArticleFulfilled articleFetch={articleFetch} index={index} category="Search" key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ArticleSearchList;
