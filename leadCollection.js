window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.getElementById(".blackScreen").style.display = "block";
      },
      1000
  )
});

// Creating a div element
let blackScreen = document.createElement("div");
blackScreen.id = "blackScreen";
blackScreen.setAttribute(
    'style',
    'display: flex; align-items: center; justify-content: center;background-color:rgba(0, 0, 0, 0.7);width: 100vw;height: 100vh; position: absolute; top: 0; z-index:500;',
);

let popup = document.createElement("div");
popup.id = "popup";
popup.setAttribute(
    'style',
    'display: flex; align-items: center; justify-content: center; text-align: center; position: absolute; background-color: rgba(255, 255, 255, 1);width: 700px;height: 400px;',
);

let row = document.createElement("div");
row.id = "row";
row.setAttribute(
    'style',
    'display: flex;',
);

let colLeft = document.createElement("div");
colLeft.id = "colLeft";
colLeft.setAttribute(
    'style',
    'flex: 50%;',
);

let image = document.createElement("img");
image.setAttribute(
    'src',
    'https://picsum.photos/350/400?grayscale',
);
colLeft.appendChild(image);
row.appendChild(colLeft);

let colRight = document.createElement("div");
colRight.id = "colRight";
colRight.setAttribute(
    'style',
    'flex: 50%;padding: 12px;display: flex;flex-direction: column;justify-content: center;align-items: center;',
);
let paragraph = document.createElement("h1");
let text = document.createTextNode("Title");
paragraph.setAttribute(
  "style",
  "font-weight: bolder;"
);

paragraph.style.color = "black";
let smallParagraph = document.createElement("span");
let textSmall = document.createTextNode("Short Text");
smallParagraph.style.color = "black";

let email = document.createElement("input");
email.id = "email";
email.setAttribute(
    'style',
    'background: white; margin-top:10px; padding: 8px;height: 40px; width: 86%; border: 1px solid;border-radius: 6px;border-color: rgba(128, 128, 128, 0.4);font-size: 16px;font-weight: 600;',
);
email.style.marginBottom = "16px";
email.setAttribute(
    'type',
    'email',
);
email.setAttribute(
    'placeholder',
    'Email',
);

let tel = document.createElement("input");
tel.id = "tel";
tel.setAttribute(
    'style',
    'background: white; padding: 8px;height: 40px; width: 86%; border: 1px solid;border-radius: 6px;border-color: rgba(128, 128, 128, 0.4);font-size: 16px;font-weight: 600;',
);
tel.setAttribute(
    'type',
    'tel',
);
tel.setAttribute(
    'placeholder',
    'Phone Number',
);

const beFirstBtn = document.createElement("button");
beFirstBtn.id = "beFirstBtn";
beFirstBtn.setAttribute(
    'style',
    'background-color: rgb(40, 40, 40);color: rgb(255, 255, 255);margin-top: 10px;width: 86%;height: 40px;border: 1px solid;border-radius: 6px;font-size: 18px;',
);
beFirstBtn.setAttribute(
    'type',
    'button',
);
let beFirstBtnText = document.createTextNode("BE FIRST");
beFirstBtn.addEventListener("click", function(){
  let eMail = document.getElementById("email");
  let phoneNumber = document.getElementById("tel");
  let box = document.getElementById("checkBox");
  let full = true;
  let responseFlag = 0;
  
  if ( eMail.value === "") {
    eMail.style.borderColor = "red";
    full = false;
  }   if ( phoneNumber.value === "") {
    phoneNumber.style.borderColor = "red";
    full = false;
  }  if ( !(box.checked) ) {
    box.style.borderColor = "red";
    full = false;
  } if (full) {
    async function GetData(){
      let data = {
          "email": eMail.value,
          "phone": phoneNumber.value
      }
      const response = await fetch("https://insider-optimus.herokuapp.com/lead-collection", {
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify(data) 
      });
      console.log(response);
      responseFlag = response.ok 
  }
  GetData()
  .then((mail) => {
    
    if (responseFlag === true) {
      colRight.style.display = "none";
      colRightCoupon.style.display = "flex";
      alert("Thank you");
    } else {
      alert("Invalid data");
    }
  })
  .catch((err) => {
    console.error(err);
  })
  }
});

let boxWiki = document.createElement("div");
boxWiki.id = "boxWiki";
boxWiki.setAttribute(
  "style",
  "color:black; margin-top:10px;",
);

let checkBox = document.createElement("input");
checkBox.id = "checkBox";
checkBox.setAttribute(
    'type',
    'checkBox',
);
checkBox.setAttribute(
  "style",
  "background-color: white;  width: 18px; height: 18px; margin-right:12px;",
);

let wikiParagraph = document.createElement("label")
wikiParagraph.setAttribute(
  "for",
  "checkBox",
);

let wikiText = document.createTextNode("By submitting this form, you are giving consent for your e-mail to be used and disclosed.");
wikiParagraph.addEventListener("click", function () {
  window.open("https://en.wikipedia.org/wiki/General_Data_Protection_Regulation","_blank");  
})

let closeButton = document.createElement("button");
closeButton.id = "closeButton";
closeButton.setAttribute(
    'style',
    ' position: absolute;top: 10px;right: 20px;background-color: transparent;font-size: 30px;color: rgb(0, 0, 0);border: none;outline: none;cursor: pointer;',
);
closeButton.innerText= ("x");
closeButton.addEventListener("click", function(){
    document.getElementById("blackScreen").style.display = "none" ;
});

let closeButtonCoupon = document.createElement("button");
closeButtonCoupon.id = "closeButtonCoupon";
closeButtonCoupon.setAttribute(
    'style',
    ' position: absolute;top: 10px;right: 20px;background-color: transparent;font-size: 30px;color: rgb(0, 0, 0);border: none;outline: none;cursor: pointer;',
);
closeButtonCoupon.innerText= ("x");
closeButtonCoupon.addEventListener("click", function(){
    document.getElementById("blackScreen").style.display = "none" ;
});

// coupon page start
let colRightCoupon = document.createElement("div");
colRightCoupon.id = "colRightCoupon";
colRightCoupon.setAttribute(
    'style',
    'flex: 50%;padding: 10px;display: none;flex-direction: column;justify-content: center;align-items: center;',
);

let amazing = document.createElement("h1");
let amazinText = document.createTextNode("Amazing!");

let couponCode = document.createElement("p");
let couponCodeText = document.createTextNode("Here is your discount code you can use in your next order. This coupon will be valid until 01.01.2020.");
couponCode.setAttribute(
  "style",
  "font-size: 14px",
);

let coupon = document.createElement("input");
coupon.id = "coupon";
coupon.setAttribute(
  "type",
  "text",
);
coupon.setAttribute(
  "value",
  "test",
);
coupon.setAttribute(
  "readonly",
  "disabled",
);
coupon.setAttribute(
  "style",
  "display:flex; justify-content: center; align-items: center; text-align:center; width:70%; height:10%; border: 2px dashed; border-color:rgba(128, 128, 128, 0.4); background-color: white; color: black;"
);

let copy = document.createElement("button");
copy.id = "copy";
copy.setAttribute(
  "type",
  "button",
);
copy.setAttribute(
    'style',
    'background-color: rgb(40, 40, 40);color: rgb(255, 255, 255);margin-top: 10px;width: 86%;height: 40px;border: 1px solid;border-radius: 6px;font-size: 18px;',
);
  console.log("copy1", copy.value);

let copyText = document.createTextNode("Copy");
copy.addEventListener("click", function () {
    // Get the text field
  let copy = document.getElementById("coupon");

  navigator.clipboard.writeText(copy.value);

  // Alert the copied text
  console.log("copy2", copy.value);
  alert("Copied the coupon: " + copy.value);
});
// coupon page end

colRight.appendChild(closeButton);
paragraph.appendChild(text);
colRight.appendChild(paragraph);
smallParagraph.appendChild(textSmall);
colRight.appendChild(smallParagraph);
colRight.appendChild(email);
colRight.appendChild(tel);
beFirstBtn.appendChild(beFirstBtnText);
colRight.appendChild(beFirstBtn);
boxWiki.appendChild(checkBox);
// boxWiki.appendChild(boxBox);
wikiParagraph.appendChild(wikiText);
boxWiki.appendChild(wikiParagraph);
colRight.appendChild(boxWiki);

colRightCoupon.appendChild(closeButtonCoupon);
amazing.appendChild(amazinText);
colRightCoupon.appendChild(amazing);
couponCode.appendChild(couponCodeText);
colRightCoupon.appendChild(couponCode);
colRightCoupon.appendChild(coupon);
copy.appendChild(copyText);
colRightCoupon.appendChild(copy);

row.appendChild(colRightCoupon);
row.appendChild(colRight);

popup.appendChild(row);
blackScreen.appendChild(popup);

// Appending the div element to body
document.getElementsByTagName("body")[0].appendChild(blackScreen);