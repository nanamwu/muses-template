"use strict";

PetiteVue.createApp({
  username: "", //空の文字列
  unread: "", //空の文字列
  data: [], //空の配列
  async init() {
    const username = sessionStorage.username;
    if (!username) {
      window.alert("ログインしてください");
      location.href = "login.html";
    }
    this.username = username;

    const res = await fetch("data.json");
    const obj = await res.json();
    this.data = obj.list;
    console.log(this.data);

    this.unread = this.data.length;
  },
}).mount();
