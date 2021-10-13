import {expect} from 'chai';

describe('Our first test', () =>{
  it('should pass', () =>{
    expect(true).to.equal(true); //if changed to false, the test fails
  });
});
