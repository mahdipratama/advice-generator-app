const ADVICE_API = 'https://api.adviceslip.com';

const adviceNumber = document.querySelector('#advice-number');
const adviceText = document.querySelector('#advice-text');
const adviceButton = document.querySelector('#advice-button');
const adviceContainer = document.querySelector('#advice-container');
const spinnerContainer = document.querySelector('.loader');


// Get API 
const fetchAdvice = async function () {
  try {
    const response = await fetch(`${ADVICE_API}/advice`, { method: 'GET', mode: 'cors', cache: 'no-cache' })

    if (!response.ok) throw new Error('Problem getting advices');

    advices = await response.json();
    return advices;
  } catch (err) {
    console.log(err);
  }
}


const showAdvice = function () {

  adviceContainer.classList.add('opacity-0');
  spinnerContainer.classList.remove('invisible');
  spinnerContainer.classList.add('visible');

  // Set delay for showing spinner
  setTimeout(async function () {
    try {
      const advices = await fetchAdvice()
      console.log(advices);
      adviceNumber.textContent = advices.slip.id;
      adviceText.textContent = `"${advices.slip.advice}"`;
    } catch (err) {
      adviceNumber.textContent = '0';
      adviceText.textContent = 'Problem getting data';
    }
    adviceContainer.classList.remove('opacity-0');
    spinnerContainer.classList.remove('visible');
    spinnerContainer.classList.add('invisible');
  }, 1000)
}


adviceButton.addEventListener('click', async (e) => {
  showAdvice();
});

showAdvice();


