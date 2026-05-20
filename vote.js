const votes = {A: 0,B: 0,C: 0,D: 0,E: 0
};
let historyLog = [];
const history = document.querySelector(".vote p");
const results = document.querySelector(".right-columen");

function vote(party) {
    votes[party]++;

    const time = new Date().toLocaleTimeString();
    historyLog.push(`Voted for Party ${party} at ${time}`);

    updateUI();
}

function updateUI() {
    // update history
    history.innerHTML = historyLog.join("<br>");

    // update results
    results.innerHTML = `
        <h1>Result</h1>
        <p>Party A: ${votes.A}</p>
        <p>Party B: ${votes.B}</p>
        <p>Party C: ${votes.C}</p>
        <p>Party D: ${votes.D}</p>
        <p>Party E: ${votes.E}</p>
    `;
}

// 🟥 DELETE LAST VOTE
function deleteLastVote() {
    if (historyLog.length === 0) return;

    const last = historyLog.pop();

    // get party letter from string
    const party = last.split("Party ")[1][0];
    votes[party]--;

    updateUI();
}

// 🔄 RESET EVERYTHING
function resetVotes() {
    votes.A = votes.B = votes.C = votes.D = votes.E = 0;
    historyLog = [];
    updateUI();
}