// round 1 => t1 vs t2 // t3 vs t4
// round 2 => t1 vs t3 // t2 vs t4
// round 3 => t1 vs t4 // t2 vs t3

const teams = ['t1', 't2', 't3', 't4', 't5'];
function generateSchedule(teams) {
  const schedule = [];
  for (let index = 0; index < teams.length; index++) {
    const homeTeam = teams[index];
    for (let newIndex = index + 1; newIndex < teams.length; newIndex++) {
      const awayTeam = teams[newIndex];
      schedule.push({ homeTeam, awayTeam });
    }
  }

  return schedule;
}
const matches = generateSchedule(teams);



console.log(matches);