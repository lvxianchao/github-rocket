// 按钮的火箭图标
let svg = '<svg t="1527936637981" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1775" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50"><defs><style type="text/css"></style></defs><path d="M838.656 767.616l0 17.344-201.344-40.576c-12.992 43.456-65.152 76.736-125.952 76.736-60.864 0-113.024-33.344-126.016-78.208l-199.872 39.104 0-17.344c0-98.496 27.52-169.472 89.728-228.864C253.44 254.848 379.456 76.736 504 4.288L511.296 0l7.232 4.288c124.608 72.448 249.088 250.56 228.864 531.584C811.136 595.264 838.656 666.24 838.656 767.616zM574.976 417.152c37.632-34.752 40.512-94.144 5.76-131.84C545.984 247.68 486.656 244.736 448.96 279.488c-37.632 34.752-40.512 94.208-5.76 131.84C477.952 449.024 537.344 451.904 574.976 417.152zM558.4 916.8C558.4 958.784 512 1024 512 1024s-46.336-69.568-46.336-107.2c0-31.872 20.224-57.92 46.336-57.92S558.4 884.928 558.4 916.8z" p-id="1776"></path></svg>';

// 按钮的最终 HTML 模板
let template = `<div id="kkjofhv">${svg}</div>`;

// 插入返回顶部按钮的容器
let container = document.querySelector('.repository-content');

// 滚动步长
let step = 300;

if (container) {
    // 向页面中插入按钮
    container.appendChild(dom(template));

    let btn = document.querySelector('#kkjofhv');

    // 当前滚动条的位置，如果大于 200，则显示按钮
    let position = getScrollTop();
    if (position > 200) {
        btn.style.display = '';
    }

    // 滚动事件监听，如果距顶部大于 200，显示按钮，否则隐藏
    window.onscroll = function (event) {
        let curentTop = getScrollTop();

        btn.style.display = curentTop > 200 ? 'block' : 'none';
    }

    // 回到顶部
    btn.addEventListener('click', function (event) {
        event.stopPropagation();

        let timer = setInterval(function () {
            if (getScrollTop() > 0) {
                document.documentElement.scrollTop -= step;
            } else {
                clearInterval(timer);
            }
            console.log(getScrollTop());
        }, 10);
    })

}


// 将字符模板转为 Dom
function dom(elementString) {
    let div = document.createElement('div');
    div.innerHTML = elementString;
    return div.childNodes[0];
}

// 获取滚动条的位置
function getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop;
}