export default (state = [], action) => {
  let quote;
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      quote = state.filter(quote => quote.id === action.quoteId)
      quote[0].votes += 1
      return quote
    case "DOWNVOTE_QUOTE":
    quote = state.filter(quote => quote.id === action.quoteId)
    if (quote[0].votes !== 0){
      quote[0].votes -= 1;
      return quote
    }
    default:
      return state;
  }
}
