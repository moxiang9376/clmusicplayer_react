import axios from "axios";

function searchSong(style, songName, page) {
  let url = "http://118.24.179.175:8888/search";
  return new Promise(function (resolve, reject) {
    axios({
      methods: "get",
      url: url,
      params: {
        keywords: songName,
        limit: 30,
        offset: page - 1,
      },
    }).then((res) => {
      console.log(res);
      resolve(res);
    });
  });
}
function test() {
  console.log("公共方法引入成功！");
}

export default {
  searchSong,
  test,
};
