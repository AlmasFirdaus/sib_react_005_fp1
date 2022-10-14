import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isFetchPending: false,
  isFetchSuccess: false,
  entitiesIndonesia: [],
  entitiesIndonesia1: [],
  entitiesProgramming: [],
  entitiesCovid19: [],
  entitiesSearch: [],
  entitiesSaved: [],
  searchInput: "",
};

export const fetchArticleIndonesia = createAsyncThunk("article/fetchArticleIndonesia", async () => {
  const response = await axios.get("https://newsapi.org/v2/top-headlines?country=id&page=1&pageSize=20&apiKey=42519f8a87e749988e936b88d083e96b");
  return response.data.articles;
});
export const fetchArticleIndonesia1 = createAsyncThunk("article/fetchArticleIndonesia1", async () => {
  const response = await axios.get("https://newsapi.org/v2/top-headlines?country=id&page=1&pageSize=20&apiKey=42519f8a87e749988e936b88d083e96b");
  return response.data.articles;
});

export const fetchArticleProgramming = createAsyncThunk("article/fetchArticleProgramming", async () => {
  let datenow = new Date();
  datenow.setMonth(datenow.getMonth() - 1);
  let lastMonth = `${datenow.getFullYear}-${datenow.getMonth}-${datenow.getDate()}`;
  const response = await axios.get(`https://newsapi.org/v2/everything?q=programming&from=${lastMonth}&apiKey=42519f8a87e749988e936b88d083e96b`);
  return response.data.articles;
});

export const fetchArticleCovid19 = createAsyncThunk("article/fetchArticleCovid19", async () => {
  let datenow = new Date();
  datenow.setMonth(datenow.getMonth() - 1);
  let lastMonth = `${datenow.getFullYear}-${datenow.getMonth}-${datenow.getDate()}`;
  const response = await axios.get(`https://newsapi.org/v2/everything?q=covid-19&from=${lastMonth}&apiKey=42519f8a87e749988e936b88d083e96b`);
  return response.data.articles;
});

export const fetchArticleSearch = createAsyncThunk("article/fetchArticleCovid", async ({ searchInput }) => {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=42519f8a87e749988e936b88d083e96b`);
  const responseful = response.data.articles;
  return { responseful, searchInput };
});

const articleSavedPromise = (articleFetch) => {
  return new Promise((resolve, reject) => {
    if (articleFetch) {
      resolve({ articleFetch });
    } else {
      reject("No articles have been saved yet.");
    }
  });
};

export const articleSaved = createAsyncThunk("article/articleSaved", async ({ articleFetch }) => {
  try {
    const response = await articleSavedPromise(articleFetch);
    return response;
  } catch (err) {
    throw err;
  }
});

const articleUnSavedPromise = (filteredUnSave) => {
  return new Promise((resolve, reject) => {
    if (filteredUnSave) {
      resolve(filteredUnSave);
    } else {
      reject("No articles have been saved yet.");
    }
  });
};
export const articleUnSaved = createAsyncThunk("article/articleUnSaved", async ({ filteredUnSave }) => {
  try {
    const response = await articleUnSavedPromise(filteredUnSave);
    return response;
  } catch (err) {
    throw err;
  }
});

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleIndonesia.pending, (state, action) => {
        state.isFetchPending = true;
        state.entitiesIndonesia = [];
      })
      .addCase(fetchArticleIndonesia.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        state.entitiesIndonesia.push(...action.payload);
      })

      .addCase(fetchArticleIndonesia1.pending, (state, action) => {
        state.isFetchPending = true;
        state.entitiesIndonesia1 = [];
      })
      .addCase(fetchArticleIndonesia1.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        state.entitiesIndonesia1.push(...action.payload);
      })

      .addCase(fetchArticleProgramming.pending, (state, action) => {
        state.isFetchPending = true;
        state.entitiesProgramming = [];
      })
      .addCase(fetchArticleProgramming.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        state.entitiesProgramming.push(...action.payload);
      })

      .addCase(fetchArticleCovid19.pending, (state, action) => {
        state.isFetchPending = true;
        state.entitiesCovid19 = [];
      })
      .addCase(fetchArticleCovid19.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        state.entitiesCovid19.push(...action.payload);
      })

      .addCase(fetchArticleSearch.pending, (state, action) => {
        state.isFetchPending = true;
        state.searchInput = "";
        state.entitiesSearch = [];
      })
      .addCase(fetchArticleSearch.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        state.searchInput = action.payload.searchInput;
        state.entitiesSearch.push(...action.payload.responseful);
      })

      .addCase(articleSaved.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        const { articleFetch } = action.payload;

        if (!state.entitiesSaved.includes(articleFetch)) {
          const wrapArticle = [articleFetch];
          state.entitiesSaved.push(...wrapArticle);
        }
      })

      .addCase(articleUnSaved.pending, (state, action) => {
        state.isFetchPending = true;
        state.entitiesSaved = [];
      })
      .addCase(articleUnSaved.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        state.entitiesSaved.push(...action.payload);
      });
  },
});

export default articleSlice.reducer;
