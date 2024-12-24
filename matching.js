const teams = [
  { name: "team 1" },
  { name: "team 2" },
  { name: "team 3" },
  { name: "team 4" },
];

const addTeams = () => {
  console.clear();
  const text1 = `Currently there are ${teams.length} team. press no to quit`;
  const text2 = "\n\nTeam Name : ";
  const teamName = prompt(text1 + text2);

  if (teamName === "no") {
    return;
  }

  teams.push({ name: teamName });
  addTeams();
};

const randomiser = () => {
  teams.sort((a, b) => Math.random() - 0.5);
};

// addTeams();
// console.log(teams);
randomiser();
console.log(teams);
