// サムネイル画像の作成
var image = new Image();
image.height = 100;
image.style.float = "left";

// サムネイルが取得できるまで取得し続ける
var timer = setInterval(function(){
    insertThumbnail();

    if (image.src) {
        clearInterval(timer);
    }
}, 1000);

// オブザーバインスタンスを作成
var observer = new MutationObserver(function(mutations) {
    insertThumbnail();
});

// 対象ノードとオブザーバの設定を渡す
observer.observe(document.querySelector('head'), {childList: true, subtree: true});

/**
 * 引数としてパラメータの名前を渡すと、URLのパラメータから値を取得して返す
 *
 * @param {string} name パラメータの名前
 */
function getParamValueByName(name) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i<vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == name) {
            return pair[1];
        }
    }
}

/**
 * サムネイル画像のURLを取得して挿入
 */
function insertThumbnail() {
    image.src = 'https://i.ytimg.com/vi/'+getParamValueByName('v')+'/hqdefault.jpg';
    var playerContainerElement = document.getElementById("movie_player");
    console.log(playerContainerElement);
    playerContainerElement.insertBefore(image, playerContainerElement.firstChild);
}