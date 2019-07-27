export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

const MY_API_KEY = "c39a26d9c12f48dba2a5c00e35684ecc";
const URL_API = "https://newsapi.org/v2";

export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel
});
export const requestPosts = () => ({
  type: REQUEST_POSTS
});
export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json.articles
});

export function getPostsWithChannel(channel) {
  return function(dispatch) {
    dispatch(getChannel(channel));
    return fetchPosts(channel);
  };
}

export function fetchPosts(channel) {
  return function(dispatch) {
    dispatch(getChannel(channel));
    dispatch(requestPosts());
    return fetch(
      `${URL_API}/everything?sources=${channel}&apiKey=${MY_API_KEY}`
    )
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        dispatch(receivedPosts(json));
      });
  };
}

export function fetchPostsByCountry(country) {
  return function(dispatch) {
    dispatch(getChannel(""));
    dispatch(requestPosts());
    return fetch(
      `${URL_API}/top-headlines?country=${country}&apiKey=${MY_API_KEY}`
    )
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        dispatch(receivedPosts(json));
      });
  };
}
