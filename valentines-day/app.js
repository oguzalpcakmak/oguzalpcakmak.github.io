const myLovesName = "meltem";
let valentinesName = "";
let documentBody = null;

const handleNameInput = () => {
  const nameInput = document.getElementById("name-input");
  nameInput.addEventListener("input", (event) => {
    const newValue = event.target.value;
    valentinesName = newValue === "" ? "" : newValue;
  });
};

/* https://codewithsaif.com/how-to-create-colorful-heart-on-mouse-move-using-javascript/ */
const initHearts = () => {
  document.addEventListener("mousemove", (e) => {
    const body = documentBody;
    const span = document.createElement("span");
    span.classList.add("hearts");
    const x = e.offsetX;
    const y = e.offsetY;
    span.style.top = `${y}px`;
    span.style.left = `${x}px`;
    const size = Math.floor(Math.random() * 40) + 10;
    span.style.height = `${size}px`;
    span.style.width = `${size}px`;
    body.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 2000);
  });
};

const changeYesButton = () => {
  var yesButton = document.getElementById("yes-button");
  var computedStyleYes = window.getComputedStyle(yesButton);
  var currentWidthYes = parseFloat(computedStyleYes.getPropertyValue("width"));
  var currentHeightYes = parseFloat(
    computedStyleYes.getPropertyValue("height")
  );
  var currentFontSizeYes = parseFloat(
    computedStyleYes.getPropertyValue("font-size")
  );
  yesButton.style.width = currentWidthYes * 1.1 + "px";
  yesButton.style.height = currentHeightYes * 1.1 + "px";
  yesButton.style.fontSize = currentFontSizeYes * 1.1 + "px";
};

const handleGoBtn = () => {
  if (valentinesName.toLocaleLowerCase() === myLovesName) {
    documentBody.removeChild(document.getElementById("root-1"));
    const root2 = document.createElement("div");
    root2.innerHTML = `<span id="question">will you be my valentine?💖</span>
    <div
      id="startbutton"
      style="top: %5; left: %20; text-align: center; margin-left: -10%; margin-top: 20%"
    >
      <input
        type="button"
        onclick="play();"
        value="ANSWER"
        id="start1"
        style="
          height: 100px;
          width: 250px;
          background: white;
          color: black;
          margin-left: 0px;
          border: 1px solid black;
          font-family: Franchise;
          font-size: 50px;
          box-shadow: black 5px 5px 0px 1px, black 4px 4px 0px 1px,
            black 3px 3px 0px 1px, black 2px 2px 0px 1px, black 1px 1px 0px 1px,
            black 0px 0px 0px 1px;
          margin-top: 0px;
          transition: all 0.2s ease 0s;
          position: fixed;
        "
        onmousedown="style.boxShadow='none'; style.marginLeft='5px'; style.marginTop='5px'; style.color='white'; style.background='black';"
        onmouseup="style.boxShadow='5px 5px 0px 1px black, 4px 4px 0px 1px black, 3px 3px 0px 1px black, 2px 2px 0px 1px black, 1px 1px 0px 1px black'; style.marginLeft='0px'; style.marginTop='0px'; style.color='black'; style.background='white';"
      />
    </div>
    <div id="div" onmousedown="Random();">
      <input
        value="YES!"
        class="button"
        id="yes-button"
        onclick="sheSaidYes();"
        type="button"
        style="left: 10%; top: 35%"
      />
      <input
        value="No."
        class="button"
        id="button"
        onclick="Alert();"
        onmouseover="Random();"
        onmousemove=""
        onfocus="Random();"
        onmouseup="Random();"
        type="button"
        style="left: 50%; top: 35%"
      />
    </div>
    <canvas width="400" height="300" id="myLove"></canvas>
    `;
    documentBody.appendChild(root2);
    initMyLove();
    initHearts();
  } else {
    generateToast({
      message: `😭 ${valentinesName} is not the girl i love! where is her!? 😭`,
      background: "hsl(350 100% 66.5%)",
      color: "hsl(350 100% 13.5%)",
      length: "2000ms",
    });
  }
};

function play() {
  var div = document.getElementById("div");
  var start = document.getElementById("startbutton");
  div.style.display = "block";
  start.style.display = "none";
}

function Alert() {
  var start = document.getElementById("startbutton");
  generateToast({
    message: `😭 ${valentinesName} i will kill myself... 😭`,
    background: "hsl(350 100% 66.5%)",
    color: "hsl(350 100% 13.5%)",
    length: "2000ms",
  });
  start.style.display = "block";
  div.style.display = "none";
}

const sheSaidYes = () => {
  generateToast({
    message: `💘💝💖💗💓💞❣️YES!!!💘💝💖💗💓💞❣️`,
    background: "hsl(310 100% 66.5%)",
    color: "hsl(350 100% 13.5%)",
    length: "2000ms",
  });
};

function Random() {
  var button = document.getElementById("button");
  var RandomX = Math.random() * 90 + "%";
  var RandomY = Math.random() * 92 + "%";
  button.style.left = RandomX;
  button.style.top = RandomY;
  changeYesButton();
}

const main = () => {
  documentBody = document.querySelector("body");
  handleNameInput();
  initToast();
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
