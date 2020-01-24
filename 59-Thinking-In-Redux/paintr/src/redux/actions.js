

function search(text){
  return {type: "SEARCH", payload: text}
}

function vote(paintingId){
  return {type: "VOTE", payload: paintingId}
}

function updatePainting(info){
  return {type: "SAVE_PAINTING", payload: info}
}

export {search, vote, updatePainting}
