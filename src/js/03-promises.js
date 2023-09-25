console.log("hello");
import Notiflix from 'notiflix';

const body = document.querySelector(`body`);
let form = document.querySelector(`.form`);
let delay = document.querySelector(`.js-delay`);
let step = document.querySelector(`.js-step`);
let amount = document.querySelector(`.js-amount`);
const options = {
  position: 'center-bottom',
  distance: '20px',
  borderRadius: '25px',
  timeout: 7000,
  clickToClose: true,
  cssAnimationStyle: 'from-left',
};

body.style.backgroundColor = '#cffc81';
form.addEventListener(`click`, onPromiseCreate);

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldResolve = Math.random() > 0.5;
            if (shouldResolve) {
                resolve({ position, delay });
            } else {
                reject({ position, delay });
            }
        }, delay);

    });
  }

function onPromiseCreate(event) {
    event.preventDefault();

    let valueDelay = Number(delay.value);
    let valueStep = Number(step.value);
    let valueAmount = Number(amount.value);

    for (let i = 1; i <= valueAmount; i += 1) {
        let promiseDelay = valueDelay + valueStep * i;
        createPromise(i, promiseDelay)
        .then(({ position, delay }) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, options);
        })
        .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, options);
        });
        event.currentTarget.reset();
    }
}
// next variant ------------------------------------------------------------

// const refs = {
//   body: document.querySelector('body'),
//   form: document.querySelector('form.form'),
//   delay: document.querySelector('[name="delay"]'),
//   step: document.querySelector('[name="step"]'),
//   amount: document.querySelector('[name="amount"]'),
// }

// refs.body.style.backgroundColor = '#f7eff4';
// refs.form.addEventListener('click', onPromiseCreate);

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// function onPromiseCreate(e) {
//   e.preventDefault();

//   let valueDelay = Number(refs.delay.value);
//   let step = Number(refs.step.value);
//   let amount = Number(refs.amount.value);

//   for (let i = 1; i <= amount; i += 1) {
//     let promiseDelay = valueDelay + step * i;

//     createPromise(i, promiseDelay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// }

// next variant ------------------------------------------------------------

// document.body.style.backgroundColor = '#f7eff4';
// const form = document.querySelector('form.form');
// const options = {
//   position: 'center-bottom',
//   distance: '15px',
//   borderRadius: '15px',
//   timeout: 10000,
//   clickToClose: true,
//   cssAnimationStyle: 'from-right',
// };

// form.addEventListener('click', onPromiseCreate);

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// function onPromiseCreate(e) {
//   e.preventDefault();
//   const { delay, step, amount } = e.currentTarget.elements;
//   let inputDelay = Number(delay.value);
//   let inputStep = Number(step.value);
//   let inputAmount = Number(amount.value);

//   for (let i = 1; i <= inputAmount; i += 1) {
//     inputDelay += inputStep;

//     createPromise(i, inputDelay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`,
//           options
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`,
//           options
//         );
//       });
//     e.currentTarget.reset();
//   }
// }

// next variant ------------------------------------------------------------

// import Notiflix from 'notiflix';
// const delay = document.querySelector('input[name="delay"]');
// const step = document.querySelector('input[name="step"]');
// const amount = document.querySelector('input[name="amount"]');
// const btnCreatePromise = document.querySelector('button[type="submit"]');

// function createPromise(position, delay) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
//   return promise;
// }

// btnCreatePromise.addEventListener('click', e => {
//   e.preventDefault();
//   let firstDelay = Number(delay.value);
//   let delayStep = Number(step.value);
//   for (let i = 0; i < amount.value; i++) {
//     createPromise(1 + i, firstDelay + i * delayStep)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//   }
// });