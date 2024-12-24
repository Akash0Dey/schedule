const teams = [
  { name: "team 1" },
  { name: "team 2" },
  { name: "team 3" },
  { name: "team 4" },
];

const schedule = [
  { team1: "team 1", team2: "team 6", isScheduled: false },
  { team1: "team 1", team2: "team 5", isScheduled: false },
  { team1: "team 1", team2: "team 3", isScheduled: false },
  { team1: "team 1", team2: "team 4", isScheduled: false },
  { team1: "team 1", team2: "team 2", isScheduled: false },
  { team1: "team 6", team2: "team 5", isScheduled: false },
  { team1: "team 6", team2: "team 3", isScheduled: false },
  { team1: "team 6", team2: "team 4", isScheduled: false },
  { team1: "team 6", team2: "team 2", isScheduled: false },
  { team1: "team 5", team2: "team 3", isScheduled: false },
  { team1: "team 5", team2: "team 4", isScheduled: false },
  { team1: "team 5", team2: "team 2", isScheduled: false },
  { team1: "team 3", team2: "team 4", isScheduled: false },
  { team1: "team 3", team2: "team 2", isScheduled: false },
  { team1: "team 4", team2: "team 2", isScheduled: false }
];

let matchNo = 1;
for (let round = 0; round < 1; round++) {
  const matchedTeams = [];
  while (matchedTeams.length < 6) {
    const match = schedule.findLast(
      ({ team1, team2, isScheduled }) =>
        !(
          isScheduled ||
          matchedTeams.includes(team1) ||
          matchedTeams.includes(team2)
        )
    );
    console.log(schedule, match);
    match["match"] = matchNo++;
    match.isScheduled = true;
    matchedTeams.push(match.team1, match.team2);
  }
}
console.log(schedule);
