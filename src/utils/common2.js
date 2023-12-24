export const request2 = async ({ path, method = "GET", body }) => {
  const url =
    // 'https://tiktok-full-info-without-watermark.p.rapidapi.com/vid/index?url=https%3A%2F%2Fwww.tiktok.com%2F%40alnoufali_7%2Fvideo%2F7026045315954248965';
    `https://tiktok-full-info-without-watermark.p.rapidapi.com/${path}`;
  const options = {
    method,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "tiktok-full-info-without-watermark.p.rapidapi.com",
    },
  };

  if (body) options.body = body;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
