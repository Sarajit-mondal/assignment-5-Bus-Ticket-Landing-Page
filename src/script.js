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

      createSeatList(seat.innerText);
    } else {
      alert("You can buy only 4 tickets!");
    }
  }
}

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
