import "./styles/main.css";

function createArticle() {
  const article = document.createElement("article");
  const announcement = document.createElement("h2");
  const highlights = document.createElement("div");
  highlights.id = "highlights";
  announcement.textContent = `We are thrilled to share the excitement as we celebrate the
  awesomeness that defines our beloved restaurant! 🎉✨`;

  const restaurantPride = document.createElement("h3");
  restaurantPride.textContent = `At OlymFans', we take pride in crafting extraordinary culinary
  experiences that captivate your taste buds and leave you with
  unforgettable memories. Our commitment to excellence, innovation, and
  a passion for delicious food is what sets us apart.`;

  const pCulinary = document.createElement("p");
  pCulinary.innerHTML = `<span id="culinaryMarvels">🌮 Culinary Marvels: </span>Prepare your
  taste buds for a journey of flavors! Our talented chefs work
  tirelessly to create mouthwatering dishes that showcase a fusion of
  creativity and tradition. From sizzling appetizers to decadent
  desserts, each dish tells a story of culinary artistry.`;

  const pDedicatedTeam = document.createElement("p");
  pDedicatedTeam.innerHTML = `<span id="dedicatedTeam">👨‍🍳 Dedicated Team: </span>Behind every
  exceptional dining experience is a team of dedicated individuals
  committed to making your time with us extraordinary. Our staff is
  passionate about hospitality, ensuring that every visit is not just a
  meal but a delightful journey.`;

  const pReviews = document.createElement("p");
  pReviews.innerHTML = `<span id="reviews"
  >🌟 Rave Reviews: </span
> We are humbled by the overwhelming positive
  feedback from our valued patrons. Your words inspire us to
  continually raise the bar and deliver nothing but the best. Thank
  you for being an integral part of our OlymFans' family!`;

  const pSpecialOffer = document.createElement("p");
  pSpecialOffer.innerHTML = `<span id="specialOffer">🎁 Special Offer: </span>To express our
  gratitude, we are delighted to offer an exclusive [Special Offer] for
  a limited time. It's our way of saying thank you for your continued
  support and loyalty.`;

  const pEndingMessage = document.createElement("p");
  pEndingMessage.innerHTML = `<span id="endingMessage"></span>
  Come, join us at OlymFans Restaurant, where every meal is an adventure,
  and every moment is a celebration. Experience the awesomeness that is
  uniquely OlymFans.`;

  const pCheer = document.createElement("p");
  pCheer.textContent = `Cheers to great food, great company, and an even greater dining
  experience!`;

  const pOwner = document.createElement("p");
  pOwner.innerHTML = `<br><h3>Sincerely,</h3>
  <p>Olym</p>
  <p>Owner/Manager, OlymFans</p>`;
  article.append(announcement);
  article.append(restaurantPride);
  highlights.append(pCulinary);
  highlights.append(pDedicatedTeam);
  highlights.append(pReviews);
  highlights.append(pSpecialOffer);
  article.append(highlights);
  article.append(pEndingMessage);
  article.append(pCheer);
  article.append(pOwner);
  return article;
}

function homePage() {
  const content = document.getElementById("content");
  const articles = createArticle();

  content.append(articles);
  return content;
}

export { homePage };
