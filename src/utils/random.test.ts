import { randomInteger, randomNumber } from './random';

describe('Random', () => {
   describe('.randomInteger()', () => {
      it('should run random number', () => {
         // Arrange
         const min = 0,
            max = 10;

         // Act
         const number = randomInteger(min, max);

         // Assert
         expect(number).toBeGreaterThanOrEqual(min);
         expect(number).toBeLessThanOrEqual(max);
      });
   });

   describe('.randomNumber()', () => {
      it('should run random number', () => {
         // Arrange
         const min = 0,
            max = 10;

         // Act
         const number = randomNumber(min, max);

         // Assert
         expect(number).toBeGreaterThanOrEqual(min);
         expect(number).toBeLessThanOrEqual(max);
      });
   });
});
