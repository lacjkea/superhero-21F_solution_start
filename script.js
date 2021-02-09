/* alias: "Messy Jessy"
cape: false
enemies: 5
id: 6966131228
image: "https://lh3.googleusercontent.com/proxy/YKZFp5DClZ-kwF87H9vDU1ZFmTwZFCjVO7iVv7C7N1_15exAy5VLTql77TeeiDdgIf9hXICYnFMdVdMTmze7oR960rKjH8vbElRm6TlkYbcDvlorBhdRfbx71yF95T0gO4EierVQ_zOQTWlD82zDDIk3DD0GxUwL"
mission: "Create mess everywhere she goes"
outfit: "coffe spilled t-shirt, yesterday's jeans"
powers: ["extreme disorganization, stain master, puddle stomper"]
sidekick: {name: "SnackMan", cape: false}
weaknesses: (3) ["Perfectionists", "Vacuums", "Marie Kondo"] */
// console.table(superheroes);
superheroes.forEach((hero) => {
  //   console.log(hero);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("h2").textContent = hero.alias;
  //clone.querySelector("h2:nth-child(3)").textContent = hero.mission;
  const enemiesEl = clone.querySelector(".enemies span");
  const numEnemies = hero.enemies;
  if (hero.enemies !== 1) {
    enemiesEl.textContent = numEnemies + " enemies";
  } else {
    enemiesEl.textContent = numEnemies + " enemy";
  }

  if (!hero.cape) {
    clone.querySelector(".cape").remove();
  }
  clone.querySelector("h3 span").textContent = hero.mission;
  const imgEl = clone.querySelector(".superhero-img");
  imgEl.src = hero.image;

  console.log(hero.sidekick.name);

  const ulEl = clone.querySelector("ul");
  hero.powers.forEach((power) => {
    const liEl = document.createElement("li");
    liEl.textContent = power;
    ulEl.appendChild(liEl);
    //console.log("pw:" + power);
  });

  //   if()

  const mainEl = document.querySelector("main");
  mainEl.appendChild(clone);
});
