/**
 * @jest-environment jsdom
 */

const script = require('./script');
 
test( "Tests ShowMediaList() function", () => {
    expect(
        script.ShowMediaList()
    ).toBe(
        "success"
    );
})

test( "Tests LoadMedia() function", () => {
    expect(
        script.LoadMedia( "rNRXpmlzIfc" )
    ).toBe(
        "https://www.youtube.com/embed/" + "rNRXpmlzIfc"
    );
})