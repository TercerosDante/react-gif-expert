export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=VIvIeIe51YDgV2kSz1sqzTCjNm47OBdj`;
  const response = await fetch(url);
  const { data } = (await response.json())
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }))
  return gifs;
}
