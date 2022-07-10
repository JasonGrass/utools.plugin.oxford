window.utools.onPluginEnter(({ code, type, payload }) => {
  console.log("用户进入插件", code, type, payload);

  // 再执行 onPluginEnter
  // window.alert(`onPluginEnter ${payload}`)

  if (!isValidWord(payload)) {
    window.utools.outPlugin();
    return;
  }

  const searchUrl = `https://www.oxfordlearnersdictionaries.com/definition/english/${payload}`;

  //   window.utools.ubrowser
  //     .goto(searchUrl)
  //     .evaluate(() => {
  //       window.jQuery("#main-container").off("dblclick");
  //       window.jQuery("#ox-header").hide();
  //     })
  //     .run({ width: 780, height: 600 });

  // window.alert(searchUrl);

  window.utools.shellOpenExternal(searchUrl);
  window.utools.outPlugin();
});

window.onload = function () {
  // 先执行 onload
  // window.alert(`onload ${word}`)
};

function isValidWord(payload) {
  if (!payload) {
    return false;
  }

  var r = /^[a-z]+$/gi;
  return payload.match(r);
}
