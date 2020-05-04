import React from "react";
import "./home.css";
import common from "../../assets/common.js";
import axios from "axios";
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div
          className={
            true === this.state.searchBoxCheck ? "searchBoxM" : "searchBoxT"
          }
        >
          <p className="tittle">云听R</p>
          <input onChange={this.getSearch}></input>
          <div onClick={this.search}>search</div>
        </div>
        <div
          style={{
            display: false === this.state.searchBoxCheck ? "block" : "none"
          }}
        >
          {this.state.songArr.map((item, index) => {
            return (
              <ul onClick={()=>this.playSong(item.songUrl)} key={index} className="showBox">
                <li>
                  <img className="songImg" src={item.picUrl}></img>
                </li>
                <li>{item.songName}</li>
                <li>{item.singerName}</li>
              </ul>
            );
          })}
        </div>
        <audio ref="audio" controls={!this.state.searchBoxCheck}  autoPlay="autoPlay" src={this.state.songUrl}></audio>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      keyWord: "",//搜索关键词
      searchBoxCheck: false,//搜索框样式控制
      songUrl:"",//音乐播放地址
      songArr: [//音乐搜索结果数组
        {
          picUrl: "",
          songName: "",
          singerName: "",
          songUrl:""
        }
      ]
    };
  }

  //JS事件
  //获取搜索参数
  getSearch = e => {
    this.setState({
      keyWord: e.target.value
    });
  };
  //search搜索
  search = () => {
    console.log(this.state.keyWord);
    //调用公共函数
    common
      .searchSong(this.state.keyWord)
      .then(res => {
        console.log(res);
        this.setState({
          songArr: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //播放音乐
  playSong = (songUrl) => {
    this.setState({
      songUrl:songUrl
    })
  };

  //监听音乐结束
}
