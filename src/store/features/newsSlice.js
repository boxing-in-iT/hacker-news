// src/features/news/newsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsIds: [],
  selectedNews: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsIds(state, action) {
      state.newsIds = action.payload;
    },
    setSelectedNews(state, action) {
      state.selectedNews = action.payload;
    },
  },
});

export const { setNewsIds, setSelectedNews } = newsSlice.actions;

export const selectNewsIds = (state) => state.news.newsIds;
export const selectSelectedNews = (state) => state.news.selectedNews;

export default newsSlice.reducer;
