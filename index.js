function saturdayFun(sat = "roller-skate") {
  return `This Saturday, I want to ${sat}!`;
}

function mondayWork(mon = "go to the office") {
  return `This Monday, I will ${mon}.`;
}
mondayWork();

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer"));
