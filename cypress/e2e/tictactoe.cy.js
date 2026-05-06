describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");
  });

  it("megjelenik-e az oldal (body)?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get("body").should("be.visible");
  });

  it("megjelenik-e a 9 darab div elem a játéktéren?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get("article.jatekter div.elem").should("have.length", 9);
  });

  it("Első kattintás X trimmelve a szöveget?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(0).should("include.text", "X");
  });

  it("X és O sorban váltakozva követik egymást?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(0).should("include.text", "X");

    cy.get(".jatekter .elem").eq(1).click();
    cy.get(".jatekter .elem").eq(1).should("include.text", "O");

    cy.get(".jatekter .elem").eq(2).click();
    cy.get(".jatekter .elem").eq(2).should("include.text", "X");

    cy.get(".jatekter .elem").eq(3).click();
    cy.get(".jatekter .elem").eq(3).should("include.text", "O");
  });

  it("Ugyanoda kattintás 2x", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(0).should("include.text", "X");
    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(0).should("include.text", "X");
    cy.get(".jatekter .elem").eq(0).should("not.include.text", "O");
  });

  it("X győzelme megtörténik-e?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(0).should("include.text", "X");
    cy.get(".jatekter .elem").eq(3).click();
    cy.get(".jatekter .elem").eq(1).click();
    cy.get(".jatekter .elem").eq(4).click();
    cy.get(".jatekter .elem").eq(2).click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("A győztes: X");
    });
  });

  // 7. feladat:
  // 8. feladat:
  // 9. feladat:
  // 10. feladat:

  //
  // NEM MEGFELELŐ TESZTEK
  //

  // Info: formázás miatt have.text helytelen értéket ad vissza ("\n      X").
  // Emiatt a többi tesztnél include.text lett használva.
  it("Első kattintás X?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(0).should("have.text", "X");
  });
});
