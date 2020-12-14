export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return [...posts, action.payload]
    case 'UPDATE':
      // return an array where only the post that we update is returned
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
    case 'DELETE':
      // return all the posts except the one that we delete (it comes from the id !)
      return posts.filter((post) => post._id !== action.payload)
    default:
      return posts
  }
}
