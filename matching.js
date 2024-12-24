const teams = [
  { name: "team 1" },
  { name: "team 2" },
  { name: "team 3" },
  { name: "team 4" },
  { name: "team 5" },
];

const range = (start, end, step) => {
  const numbers = [];

  for (let number = start; number < end; number += step) {
    numbers.push(number);
  }

  return numbers;
};

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

const isValidMatchUp = (homeTeam, awayTeam) =>
  !(homeTeam === "byes" || awayTeam === "byes");

function generateMatchUp(teams) {
  const schedule = [];
  if (teams.length % 2 === 1) {
    teams.push({ name: "byes" });
  }

  for (const round of range(0, teams.length - 1, 1)) {
    for (const index of range(0, teams.length / 2, 1)) {
      const homeTeam = teams[index].name;
      const awayTeam = teams[teams.length - 1 - index].name;
      if (isValidMatchUp(homeTeam, awayTeam)) {
        schedule.push({ round: round + 1, homeTeam, awayTeam });
      }
    }

    teams.splice(1, 0, teams.pop());
  }

  if ((teams.at(-1).name = "byes")) {
    teams.pop();
  }

  return schedule;
}
randomiser();
const schedules = generateMatchUp(teams);

// addTeams();
// console.log(teams);
console.table(schedules);
