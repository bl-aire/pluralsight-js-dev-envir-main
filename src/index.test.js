import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe('Our first test', () =>{
  it('should pass', () =>{
    expect(true).to.equal(true); //if changed to false, the test fails
  });
});

describe('index.html', () =>{
  it('should have h1 that says Users', () =>{
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Users");
    dom.window.close();
  });
});
