import React from "react";
import "./home.css";
import axios from "axios";
import common from "../../assets/js/common";
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="searchBoxT">
          <input onChange={this.getSearch}></input>
          <div onClick={this.search}>search</div>
        </div>
        <div
          style={{
            display: false === this.state.searchBoxCheck ? "block" : "none",
          }}
        >
          {this.state.songArr.map((item, index) => {
            return (
              <ul
                onClick={() => this.playSong(item.songUrl)}
                key={index}
                className="showBox"
              >
                <li>
                  <img className="songImg" src={item.picUrl}></img>
                </li>
                <li>{item.songName}</li>
                <li>{item.singerName}</li>
              </ul>
            );
          })}
        </div>
        <audio
          ref="audio"
          controls={!this.state.searchBoxCheck}
          autoPlay="autoPlay"
          src={this.state.songUrl}
        ></audio>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      keyWord: "", //搜索关键词
      songUrl: "", //音乐播放地址
      songArr: [
        //音乐搜索结果数组
        {
          picUrl: "",
          songName: "",
          singerName: "",
          songUrl: "",
        },
      ],
    };
  }

  componentDidMount() {
    common.searchSong(null, "周杰伦", 1).then((res) => {
      console.log(res);
    });
  }

  //JS事件
  //获取搜索参数
  getSearch = (e) => {
    this.setState({
      keyWord: e.target.value,
    });
  };

  //搜索关键词
  search = () => {
    common.searchSong(null, this.state.keyWord, 1).then((res) => {
      console.log(res);
    });
  };

  //播放音乐
  playSong = (songUrl) => {
    this.setState({
      songUrl: songUrl,
    });
  };

  //监听音乐结束
}
