const {checkSeatStatus, getRowNumber, book} = require('../homework.js');

describe('checkSeatStatus function test', function(){
    it('checkSeatStatus should be a function', function(){
        expect(typeof checkSeatStatus).toBe('function');
    });
    
    it('checkSeatStatus should recieve as first parameter a string.', function(){
        expect(() => checkSeatStatus(9)).toThrow(
            new TypeError('First parameter is not a string.')
        )
    });
    
    it('checkSeatStatus should recieve as second parameter a number.', function(){
        expect(() => checkSeatStatus('hola','9')).toThrow(
            new TypeError('Second parameter is not a number.')
        )
    });

    it('should return true if the given seat define by row and column is booked', function(){
        expect(checkSeatStatus('A', 1)).toBe(true);
    });
    
    it('should return false if the given seat define by row and column is not booked', function(){
        expect(checkSeatStatus('A', 3)).toBe(false);
    });
})


describe('getRowNumber function test', function(){
    it('should return 1 if the letter given is an A', function(){
        expect(getRowNumber('A')).toBe(0);
      });
      
    it('should return 3 if the letter given is a C',function(){
        expect(getRowNumber('C')).toBe(2);
      });    
})

describe('book function test', function(){
    it('Should return seat A3 successfully booked.', function(){
        expect(book('A',3)).toBe('Seat in A3 successfully booked.')
    });
    it('Should return seat A1 is already booked.', function(){
        expect(book('A',1)).toBe('Seat in A1 is already booked.')
    });    
})

