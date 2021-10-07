const randomInteger = (min: number, max: number) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomNumber(min: number, max: number) {
   return Math.random() * (max - min) + min;
}

export { randomInteger, randomNumber };
