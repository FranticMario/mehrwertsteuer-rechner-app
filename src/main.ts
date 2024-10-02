const selectedMehrwertsteuerRadio = document.querySelectorAll('.mehrwertsteuer')  as NodeListOf<HTMLInputElement>;

const selectedProzentSatzRadio =  document.querySelectorAll('.prozentsatz') as NodeListOf<HTMLInputElement>;

const inputTitle = document.querySelector(".container__title.input__container") as HTMLElement;
const btnBerechnen = document.querySelector(".btn") as HTMLInputElement;
const inputBetrag = document.querySelector("#input__betrag") as HTMLInputElement;
const outputMehrwertsteuerbetrag = document.querySelector(".mehrwersteuerbetrag__output") as HTMLElement;
const outputEndpreis = document.querySelector(".endpreis__output") as HTMLElement;

let brutto: boolean = false;


const getSelectedMehrwertsteuerOption = (e:Event) => {
  const target = e.target as HTMLInputElement;
  inputTitle.innerText = target.value === "netto"
  ? "Nettobtrag(Preis ohne Mehrwertsteuer) in Euro*"
  : "Brutto (Preis inklusive Mehrwertsteuer) in Euro*"
  brutto = target.value === "brutto" ? true: false;

}
selectedMehrwertsteuerRadio.forEach(item => item.addEventListener("click", getSelectedMehrwertsteuerOption))


const getSelectedProzentsatzOption = ():number => {
  for (const item of selectedProzentSatzRadio) {
    if (item.checked) {
      return Number(item.value);
    }
  }
  return Number(selectedProzentSatzRadio[0].value)
}



const calculate = ():void => {
  const prozentsatzValueSelected : number = getSelectedProzentsatzOption()
  const inputBetragValue = +(inputBetrag.value);

  const endMehrwertsteuerBetrag = inputBetragValue * (prozentsatzValueSelected / 100)
  if(inputBetragValue) {
    if(brutto) {
      outputMehrwertsteuerbetrag.textContent = `€ ${endMehrwertsteuerBetrag.toFixed(2)}`;
      outputEndpreis.textContent = `€ ${(inputBetragValue - endMehrwertsteuerBetrag).toFixed(2)}`
    } else {
      outputMehrwertsteuerbetrag.textContent = `€ ${endMehrwertsteuerBetrag.toFixed(2)}`;
      outputEndpreis.textContent = `€ ${(inputBetragValue + endMehrwertsteuerBetrag).toFixed(2)}`
    }
  }
}


btnBerechnen.addEventListener("click", calculate)