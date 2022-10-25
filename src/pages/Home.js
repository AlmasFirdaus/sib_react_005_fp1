import React from "react";
import PagesArticles from "../component/template/PageArticles";

const Home = () => {
  // ini menampilkan halaman utama atau landing page pada saat aplikasi pertama kali dijalankan
  return (
    <>
      <section id="home">
        <div
          className="w-full h-screen bg-cover "
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582079768266-e65af1ad8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" }}
        >
          <div className="container pt-36 px-10 xl:px-20 h-1/2">
            <div className="w-full lg:w-1/2">
              <h1 className="font-bold text-slate-200 text-3xl lg:text-5xl capitalize">Search worldwide news with code</h1>
              <p className="font-medium text-slate-300 text-xl pt-5 lg:text-2xl">Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API</p>
            </div>
          </div>
        </div>
      </section>

      <PagesArticles />
    </>
  );
};

export default Home;
