const {
  shopForBeans,
  soakTheBeans,
  cookTheBeans,
} = require("./asyncAwaitBeans.js");

async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}
makeBeans();
