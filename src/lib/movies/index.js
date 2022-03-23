import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com",
  params: {
    apikey: "968c594d",
  },
});

export const searchMoviesByTitle = async (title, page = 1) => {
  // Prepare Data
  const { data } = await api.get("/", {
    params: {
      s: title,
      page,
    },
  });

  if (data.Response === "False") return data;

  //Manipulate the data to be more useful with current page and total pages
  const totalPages = Math.ceil(data.totalResults / 10);
  const newDataWithPaging = {
    ...data,
    Paging: {
      totalPages: totalPages,
      currentPage: page,
      prevPage: page - 1 > 0 ? page - 1 : null,
      nextPage: page + 1 <= totalPages ? page + 1 : null,
    },
  };

  // Create Promises
  return new Promise((resolve, reject) => {
    if (data.Response === "True") {
      resolve(newDataWithPaging);
    } else {
      // Error
      reject(data.Error);
    }
  });
};
