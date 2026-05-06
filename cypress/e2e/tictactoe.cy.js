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

  it("X győzelme megtörténik-e vízszintesen?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(3).click();
    cy.get(".jatekter .elem").eq(1).click();
    cy.get(".jatekter .elem").eq(4).click();
    cy.get(".jatekter .elem").eq(2).click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("A győztes: X");
    });
  });

  it("X győzelme megtörténik-e függőlegesen?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(1).click();
    cy.get(".jatekter .elem").eq(3).click();
    cy.get(".jatekter .elem").eq(2).click();
    cy.get(".jatekter .elem").eq(6).click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("A győztes: X");
    });
  });

  it("X győzelme megtörténik-e átlósan?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(1).click();
    cy.get(".jatekter .elem").eq(4).click();
    cy.get(".jatekter .elem").eq(2).click();
    cy.get(".jatekter .elem").eq(8).click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("A győztes: X");
    });
  });

  it("O győzelme megtörténik-e vízszintesen?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(8).click();
    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(7).click();
    cy.get(".jatekter .elem").eq(1).click();
    cy.get(".jatekter .elem").eq(5).click();
    cy.get(".jatekter .elem").eq(2).click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("A győztes: O");
    });
  });

  it("O győzelme megtörténik-e függőlegesen?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(1).click();
    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(2).click();
    cy.get(".jatekter .elem").eq(3).click();
    cy.get(".jatekter .elem").eq(4).click();
    cy.get(".jatekter .elem").eq(6).click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("A győztes: O");
    });
  });

  it("O győzelme megtörténik-e átlósan?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(1).click();
    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(2).click();
    cy.get(".jatekter .elem").eq(4).click();
    cy.get(".jatekter .elem").eq(6).click();
    cy.get(".jatekter .elem").eq(8).click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("A győztes: O");
    });
  });

  it("Döntetlen kezelve van?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");
    cy.get("div:nth-child(1)").click();
    cy.get("div:nth-child(2)").click();
    cy.get("div:nth-child(3)").click();
    cy.get("div:nth-child(5)").click();
    cy.get("div:nth-child(4)").click();
    cy.get("div:nth-child(7)").click();
    cy.get("div:nth-child(6)").click();
    cy.get("div:nth-child(9)").click();
    cy.get("div:nth-child(8)").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("A játék döntetlen!");
    });
  });

  it("Leokézás után új játék indul?", function () {
    cy.visit("https://hrvthlevi.github.io/tictactoeJS--260326/");

    cy.get(".jatekter .elem").eq(0).click();
    cy.get(".jatekter .elem").eq(3).click();
    cy.get(".jatekter .elem").eq(1).click();
    cy.get(".jatekter .elem").eq(4).click();
    cy.get(".jatekter .elem").eq(2).click();

    //kattintás a windows alertre, majd üresek a mezők utána

    for (let index = 0; index < 9; index++) {
      cy.get(".jatekter .elem").eq(index).should("not.include.text", "X");
      cy.get(".jatekter .elem").eq(index).should("not.include.text", "O");
    }
  });

  // 10. feladat: Új játék
  // párosra mindig x / ellentétje
  // 11. feladat: Játék leállása győzelem után

  // +++ Átló, vízszintes, függőleges győzelmek ell másik irányból

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
