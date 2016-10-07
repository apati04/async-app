// THESE ACTIONS ARE GOVERNED BY USER INTERACTION
//---- user can select a subreddit to display-----
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export function selectSubreddit(subreddit){
  return {
    type: 'SELECT_SUBREDDIT',
    subreddit
  }
}
//----------------------------------------------
//----user press 'refresh button' to update-----
export const 'INVALIDATE_SUBREDDIT' = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(subreddit){
  return {
    type: 'INVALIDATE_SUBREDDIT',
    subreddit
  }
}
//----------------------------------------------
// THESE ACTIONS ARE GOVERNED BY NETWORK REQUESTS
//-------- when its time to fetch posts ---------
export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(subreddit){
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}
// ------ when request comes through -------
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export function receivePosts(subreddit, json){
  return {
    type: RECIEVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Data.now()
  }
}
