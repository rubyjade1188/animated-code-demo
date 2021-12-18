let html = document.querySelector("#html");
let style = document.querySelector("#style");
let str = `
/**
* 你好，我是小周
* 接下来我要展示一下我的前端功底
* 首先我要给文字加个颜色
*/
body {
    color: #2D4263;
}
/* 接下来我把一个div 变成黑白太极
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 通过渐变形成
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 再加两个小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let str2 = "";
let n = 0;

let step = () => {
	setTimeout(() => {
		//如果是回车，就不照搬
		//如果不是回车，就照搬
		if (str[n] === "\n") {
			str2 += "<br>";
		} else if (str[n] === " ") {
			str2 += "&nbsp;";
		} else {
			str2 += str[n];
		}
		html.innerHTML = str2;
		style.innerHTML = str.substring(0, n);
		window.scrollTo(0, 99999);
		html.scrollTo(0, 99999);
		if (n < str.length - 1) {
			n += 1;
			step();
		}
	}, 10);
};

step();
