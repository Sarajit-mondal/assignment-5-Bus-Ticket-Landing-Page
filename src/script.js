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
      setInnerText("leftseat", leftSeat);
      setInnerText("seletedSeat", selectedSeat);
      setInnerText("total-price", 550 * selectedCount);
      setInnerText("grand-total", 550 * selectedCount);
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
      alert("You can't buy only 4 tickets!");
    }
  }
}
getElementId("number").addEventListener("keyup", (event) => {
  // next btn enable
  const number = getElementId("number").value;
  if (selectedCount >= 1 && number !== "") {
    getElementId("next-btn").disabled = false;
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
  getElementId("success-card").classList.toggle("-translate-x-[250%]");
  console.log("skdfdsaf");
});
// successMessage card
function successMessage() {
  getElementId("success-card").classList.toggle("-translate-x-[250%]");
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
    alert("Invalid Coupon Code! Please input write code");
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
