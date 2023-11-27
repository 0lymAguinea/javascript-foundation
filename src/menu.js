import extraRarePic from "./assets/imgs/extraRare.jpg";
import rarePic from "./assets/imgs/rare.jpg";
import mediumRarePic from "./assets/imgs/mediumRare.jpg";
import mediumPic from "./assets/imgs/medium.jpg";
import mediumWellPic from "./assets/imgs/mediumWell.jpg";
import wellDonePic from "./assets/imgs/wellDone.jpg";

function createMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.id = "menuContainer";

  const extraRare = document.createElement("div");
  extraRare.id = "extraRare";

  const rare = document.createElement("div");
  rare.id = "rare";

  const mediumRare = document.createElement("div");
  mediumRare.id = "mediumRare";

  const medium = document.createElement("div");
  medium.id = "medium";

  const mediumWell = document.createElement("div");
  mediumWell.id = "mediumWell";

  const wellDone = document.createElement("div");
  wellDone.id = "wellDone";

  menuContainer.append(extraRare);
  menuContainer.append(rare);
  menuContainer.append(mediumRare);
  menuContainer.append(medium);
  menuContainer.append(mediumWell);
  menuContainer.append(wellDone);

  return menuContainer;
}

class Steak {
  constructor(
    doneness,
    cookingTechnique,
    insideColor,
    tenderness,
    temperature
  ) {
    this.doneness = doneness;
    this.cooking = cookingTechnique;
    this.inside = insideColor;
    this.tenderness = tenderness;
    this.temperature = temperature;
  }
}

function createExtraRareSteak() {
  const menuContainer = document.getElementById("menuContainer");
  const extraRare = document.getElementById("extraRare");
  const extraRareImg = document.createElement("img");
  extraRareImg.src = extraRarePic;
  extraRare.append(extraRareImg);
  const extraRareSteak = new Steak(
    `Extra Rare or "Blue" Steak`,
    "Seared outside",
    "Completely red interior",
    "Cold and soft interior",
    "115-120"
  );
  const extraRareInfo = document.createElement("div");
  extraRareInfo.id = "extraRareInfo";

  const extraRareMainLabel = document.createElement("h4");
  extraRareMainLabel.textContent = extraRareSteak.doneness;
  const extraRareCooking = document.createElement("p");
  extraRareCooking.textContent = extraRareSteak.cooking;
  const extraRareColor = document.createElement("p");
  extraRareColor.textContent = extraRareSteak.inside;
  const extraRareTender = document.createElement("p");
  extraRareTender.textContent = extraRareSteak.tenderness;

  const extraRareTempHeader = document.createElement("h5");
  extraRareTempHeader.textContent = `Extra Rare Steak Internal Temperature`;
  const extraRareTemp = document.createElement("p");
  extraRareTemp.textContent = `${extraRareSteak.temperature} degrees Fahrenheit`;

  extraRareInfo.append(extraRareMainLabel);
  extraRareInfo.append(extraRareCooking);
  extraRareInfo.append(extraRareColor);
  extraRareInfo.append(extraRareTender);
  extraRareInfo.append(extraRareTempHeader);
  extraRareInfo.append(extraRareTemp);

  extraRare.append(extraRareInfo);

  return menuContainer;
}

function createRareSteak() {
  const menuContainer = document.getElementById("menuContainer");
  const rare = document.getElementById("rare");
  const rareImg = document.createElement("img");
  rareImg.src = rarePic;
  rare.append(rareImg);

  const rareInfo = document.createElement("div");
  rareInfo.id = "rareInfo";

  const rareSteak = new Steak(
    `Rare`,
    "Seared outside",
    "75% red interior",
    "Slight cool center",
    "125-130"
  );

  const rareMainLabel = document.createElement("h4");
  rareMainLabel.textContent = rareSteak.doneness;
  const rareCooking = document.createElement("p");
  rareCooking.textContent = rareSteak.cooking;
  const rareColor = document.createElement("p");
  rareColor.textContent = rareSteak.inside;
  const rareTender = document.createElement("p");
  rareTender.textContent = rareSteak.tenderness;
  const rareTempHeader = document.createElement("h5");
  rareTempHeader.textContent = `Rare Steak Internal Temperature`;
  const rareTemp = document.createElement("p");
  rareTemp.textContent = `${rareSteak.temperature} degrees Fahrenheit`;

  rareInfo.append(rareMainLabel);
  rareInfo.append(rareCooking);
  rareInfo.append(rareColor);
  rareInfo.append(rareTender);
  rareInfo.append(rareTempHeader);
  rareInfo.append(rareTemp);

  rare.append(rareInfo);

  return menuContainer;
}

function createMediumRare() {
  const menuContainer = document.getElementById("menuContainer");
  const mediumRare = document.getElementById("mediumRare");
  const mediumRareImg = document.createElement("img");
  mediumRareImg.src = mediumRarePic;
  mediumRare.append(mediumRareImg);

  const mediumRareInfo = document.createElement("div");
  mediumRareInfo.id = "mediumRareInfo";

  const mediumRareSteak = new Steak(
    `Medium-Rare Steak`,
    "Seared outside",
    "50% red interior",
    "Slightly firm",
    "130-140"
  );

  const mediumRareMainLabel = document.createElement("h4");
  mediumRareMainLabel.textContent = mediumRareSteak.doneness;
  const mediumRareCooking = document.createElement("p");
  mediumRareCooking.textContent = mediumRareSteak.cooking;
  const mediumRareColor = document.createElement("p");
  mediumRareColor.textContent = mediumRareSteak.inside;
  const mediumRareTender = document.createElement("p");
  mediumRareTender.textContent = mediumRareSteak.tenderness;
  const mediumRareTempHeader = document.createElement("h5");
  mediumRareTempHeader.textContent = `Medium Rare Steak Internal Temperature`;
  const mediumRareTemp = document.createElement("p");
  mediumRareTemp.textContent = `${mediumRareSteak.temperature} degrees Fahrenheit`;

  mediumRareInfo.append(mediumRareMainLabel);
  mediumRareInfo.append(mediumRareCooking);
  mediumRareInfo.append(mediumRareColor);
  mediumRareInfo.append(mediumRareTender);
  mediumRareInfo.append(mediumRareTempHeader);
  mediumRareInfo.append(mediumRareTemp);
  mediumRare.append(mediumRareInfo);

  return menuContainer;
}

function createMedium() {
  const menuContainer = document.getElementById("menuContainer");
  const medium = document.getElementById("medium");
  const mediumImg = document.createElement("img");
  mediumImg.src = mediumPic;
  medium.append(mediumImg);

  const mediumInfo = document.createElement("div");
  mediumInfo.id = "mediumInfo";

  const mediumSteak = new Steak(
    `Medium Steak`,
    "Seared outside",
    "Pink center with slight red",
    "Firm and springy",
    "140-150"
  );

  const mediumMainLabel = document.createElement("h4");
  mediumMainLabel.textContent = mediumSteak.doneness;
  const mediumCooking = document.createElement("p");
  mediumCooking.textContent = mediumSteak.cooking;
  const mediumColor = document.createElement("p");
  mediumColor.textContent = mediumSteak.inside;
  const mediumTender = document.createElement("p");
  mediumTender.textContent = mediumSteak.tenderness;
  const mediumTempHeader = document.createElement("h5");
  mediumTempHeader.textContent = `Medium Rare Steak Internal Temperature`;
  const mediumTemp = document.createElement("p");
  mediumTemp.textContent = `${mediumSteak.temperature} degrees Fahrenheit`;

  mediumInfo.append(mediumMainLabel);
  mediumInfo.append(mediumCooking);
  mediumInfo.append(mediumColor);
  mediumInfo.append(mediumTender);
  mediumInfo.append(mediumTempHeader);
  mediumInfo.append(mediumTemp);
  medium.append(mediumInfo);

  return menuContainer;
}

function createMediumWell() {
  const menuContainer = document.getElementById("menuContainer");
  const mediumWell = document.getElementById("mediumWell");

  const mediumWellImg = document.createElement("img");
  mediumWellImg.src = mediumWellPic;
  mediumWell.append(mediumWellImg);

  const mediumWellInfo = document.createElement("div");
  mediumWellInfo.id = "mediumInfo";

  const mediumWellSteak = new Steak(
    `Medium Steak`,
    "Seared outside",
    "Slightest bit of pink in center",
    "Mostly cooked throughout",
    "150-155"
  );

  const mediumWellMainLabel = document.createElement("h4");
  mediumWellMainLabel.textContent = mediumWellSteak.doneness;
  const mediumWellCooking = document.createElement("p");
  mediumWellCooking.textContent = mediumWellSteak.cooking;
  const mediumWellColor = document.createElement("p");
  mediumWellColor.textContent = mediumWellSteak.inside;
  const mediumWellTender = document.createElement("p");
  mediumWellTender.textContent = mediumWellSteak.tenderness;
  const mediumWellTempHeader = document.createElement("h5");
  mediumWellTempHeader.textContent = `Medium Rare Steak Internal Temperature`;
  const mediumWellTemp = document.createElement("p");
  mediumWellTemp.textContent = `${mediumWellSteak.temperature} degrees Fahrenheit`;

  mediumWellInfo.append(mediumWellMainLabel);
  mediumWellInfo.append(mediumWellCooking);
  mediumWellInfo.append(mediumWellColor);
  mediumWellInfo.append(mediumWellTender);
  mediumWellInfo.append(mediumWellTempHeader);
  mediumWellInfo.append(mediumWellTemp);

  mediumWell.append(mediumWellInfo);

  return menuContainer;
}

function createWellDone() {
  const menuContainer = document.getElementById("menuContainer");
  const wellDone = document.getElementById("wellDone");

  const wellDoneImg = document.createElement("img");
  wellDoneImg.src = wellDonePic;
  wellDone.append(wellDoneImg);

  const wellDoneInfo = document.createElement("div");
  wellDoneInfo.id = "wellDoneInfo";

  const wellDoneSteak = new Steak(
    `Well-Done Steak`,
    "Seared outside",
    "Fully brown center",
    "Firm and cooked throughout",
    "160+"
  );

  const wellDoneMainLabel = document.createElement("h4");
  wellDoneMainLabel.textContent = wellDoneSteak.doneness;
  const wellDoneCooking = document.createElement("p");
  wellDoneCooking.textContent = wellDoneSteak.cooking;
  const wellDoneColor = document.createElement("p");
  wellDoneColor.textContent = wellDoneSteak.inside;
  const wellDoneTender = document.createElement("p");
  wellDoneTender.textContent = wellDoneSteak.tenderness;
  const wellDoneTempHeader = document.createElement("h5");
  wellDoneTempHeader.textContent = `Medium Rare Steak Internal Temperature`;
  const wellDoneTemp = document.createElement("p");
  wellDoneTemp.textContent = `${wellDoneSteak.temperature} degrees Fahrenheit`;

  wellDoneInfo.append(wellDoneMainLabel);
  wellDoneInfo.append(wellDoneCooking);
  wellDoneInfo.append(wellDoneColor);
  wellDoneInfo.append(wellDoneTender);
  wellDoneInfo.append(wellDoneTempHeader);
  wellDoneInfo.append(wellDoneTemp);
  wellDone.append(wellDoneInfo);

  return menuContainer;
}

function menuPage() {
  const content = document.getElementById("content");
  const menu = createMenu();

  content.append(menu);
  const extraRareSteak = createExtraRareSteak();
  content.append(extraRareSteak);
  const RareSteak = createRareSteak();
  content.append(RareSteak);
  const mediumRare = createMediumRare();
  content.append(mediumRare);
  const medium = createMedium();
  content.append(medium);
  const mediumWell = createMediumWell();
  content.append(mediumWell);
  const wellDone = createWellDone();
  content.append(wellDone);
  return content;
}

export { menuPage };
