let selectedCount = 0;
let leftSeat = 40;
let selectedSeat = 0;

// selected set
document.querySelectorAll(".seat").forEach((seat, index) => {
  seat.addEventListener("click", () => {
    seatTicketSelect(seat);
  });
});

// ticket Selection
function seatTicketSelect(seat) {
  if (seat.classList.contains("bg-primary-color") !== true) {
    if (selectedCount < 4) {
      seat.classList.remove("bg-neutral-300");
      seat.classList.add("bg-primary-color", "text-light-color");
      selectedCount++;
      leftSeat--;
      selectedSeat++;
      // setinnerText
      setInnerText("leftseat", leftSeat);
      setInnerText("seletedSeat", selectedSeat);
      setInnerText("total-price", 550 * selectedCount);
      setInnerText("grand-total", 550 * selectedCount);

      // create seleted  lists
      createSeatList(seat.innerText);
      // discount btn enable
      if (selectedCount === 4) {
        getElementId("discount-btn").disabled = false;
      }
      // next btn enable
      const number = getElementId("number").value;
      if (selectedCount >= 1 && number !== "") {
        getElementId("next-btn").disabled = false;
      }
    } else {
      alert("You can buy only 4 tickets! Not More");
    }
  }
  // decriment and removeseleted
  // decriment and removeseleted
  // decriment and removeseleted
  else if (seat.classList.contains("bg-primary-color") === true) {
    if (selectedCount >= 1) {
      seat.classList.add("bg-neutral-300");
      seat.classList.remove("bg-primary-color", "text-light-color");
      selectedCount--;
      leftSeat++;
      selectedSeat--;
      // setinnerText
      setInnerText("leftseat", leftSeat);
      setInnerText("seletedSeat", selectedSeat);
      setInnerText("total-price", 550 * selectedCount);
      setInnerText("grand-total", 550 * selectedCount);

      removeSeatList(seat.innerText);

      // discount btn enable
      if (selectedCount === 3) {
        getElementId("discount-btn").disabled = true;
      }
      // next btn enable
      const number = getElementId("number").value;
      if (selectedCount === 0 && number !== "") {
        getElementId("next-btn").disabled = true;
      }
    }
  }
  // decriment and removeseleted
  // decriment and removeseleted
  // decriment and removeseleted
}
getElementId("number").addEventListener("keyup", (event) => {
  // next btn enable
  const number = getElementId("number").value;
  if (selectedCount >= 1 && number !== "") {
    getElementId("next-btn").disabled = false;
  } else {
    getElementId("next-btn").disabled = true;
  }
});
// next btn click
getElementId("next-btn").addEventListener("click", () => {
  successMessage();
  getElementId("nameinput").value = "";
  getElementId("number").value = "";
  getElementId("email-input").value = "";
  getElementId("next-btn").disabled = true;
});

// continue btn
getElementId("continue-btn").addEventListener("click", () => {
  getElementId("success-card").classList.toggle("-translate-x-[300%]");
  console.log("skdfdsaf");
});
// successMessage card
function successMessage() {
  getElementId("success-card").classList.toggle("-translate-x-[300%]");
}

// discount btn click
getElementId("discount-btn").addEventListener("click", () => {
  const couponCode = getElementId("coupon-code");
  const code = couponCode.value.trim().toUpperCase();
  const grandTotal = parseInt(getElementId("grand-total").innerText);

  // discount condition
  if (code === "NEW15") {
    setInnerText("grand-total", grandTotal - grandTotal * 0.15);
    getElementId("discount-input").classList.add("hidden");
  } else if (code === "COUPLE 20") {
    setInnerText("grand-total", grandTotal - grandTotal * 0.2);
    getElementId("discount-input").classList.add("hidden");
  } else {
    couponCode.value = "";
    alert("Invalid Coupon Code! Please input Right Coupon Code");
  }
});

// work with nextBtn

//create seat list
function createSeatList(seatPosition) {
  const setList = getElementId("set-container");
  const div = document.createElement("div");
  div.innerHTML = `<p>${seatPosition}</p>
                <p>Economoy</p>
                <p>550</p>`;
  setList.appendChild(div);
}
// remove seat lists
function removeSeatList(seat) {
  const seatLists = document
    .querySelectorAll("#set-container div")
    .forEach((selecteSeat) => {
      const seatText = selecteSeat.firstChild.innerText;
      if (seatText === seat) {
        selecteSeat.remove();
      }
    });
}

// getElementId function
function getElementId(id) {
  const element = document.getElementById(id);
  return element;
}
// setInnerText function
function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}
