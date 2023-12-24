export const request = async ({ path, method = "GET", body }) => {
  // const url = 'https://tiktok-video-no-watermark2.p.rapidapi.com/?url=https%3A%2F%2Fwww.tiktok.com%2F%40tiktok%2Fvideo%2F7231338487075638570&hd=1';
  const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`;

  const options = {
    method,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "tiktok-video-no-watermark2.p.rapidapi.com",
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

export const compactBigNumber = (num) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return formatter.format(num);
};

export const replaceWithBr = (str = "") => str.replace(/\n/g, "<br/>");
