window.addEventListener("DOMContentLoaded", function () {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    init();


    function init() {
        ctx.fillStyle = "#909090";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "orange";
        ctx.font = "45px 华文仿宋";
        ctx.fillText("刮一刮", 35, canvas.height / 2 + 20);
        //将文字与黑色背景融为一体
        ctx.globalCompositeOperation = "destination-out";
        random();


    }

    function random() {
        let arr = ["参与奖", "三等奖", "参与奖", "二等奖", "参与奖", "参与奖", "参与奖", "参与奖", "一等奖", "参与奖", "参与奖", "三等奖",
            "参与奖", "参与奖", "三等奖", "三等奖", "二等奖", "三等奖", "三等奖", "二等奖"];
        let text = document.querySelector(".text");
        text.innerText = arr[Math.floor(Math.random() * arr.length)];
        console.log(text.innerText);

        window.addEventListener("mouseup", () => {

            alert("恭喜您获得" + text.innerText);

        })
    }

    function open(event) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(event.offsetX, event.offsetY, 10, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

    }

    canvas.addEventListener("mousedown", () => {
        canvas.addEventListener("mousemove", open);

    })

    window.addEventListener("mouseup", () => {
        canvas.addEventListener("mousemove", open);

    })

    let win = document.querySelector(".win");
    ctx = canvas.getContext("2d");

    setInterval(() => {

        win.style.color = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
      
        console.log(win.style.color);
     
    }, 3000);





})