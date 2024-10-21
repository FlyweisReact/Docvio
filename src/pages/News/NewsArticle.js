/** @format */

import React from "react";
import styles from "../../css/modules/news.module.css";
import Banner from "../../components/News/Banner";
import { constants } from "../../constant/data";
import NewsContent from "../../components/News/NewsContent";

const bannerInfo = {
  heading: "7 Tips to increase your immune system",
  date: "11 Aug, 2024",
  hashLink: "/news/post/1#news",
};

const NewsArticle = () => {
  return (
    <section className={styles.news_article_page}>
      <Banner data={bannerInfo} />
      <NewsContent data={constants.newsContent} />
    </section>
  );
};

export default NewsArticle;
