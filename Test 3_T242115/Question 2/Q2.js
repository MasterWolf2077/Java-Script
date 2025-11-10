function gradeAnalyzer() {
    const scores = [];

    while (true) {
        const input = prompt("Enter a score between 0 and 100 (Cancel to stop):");
        if (input === null) break; // Cancel to stop

        const score = parseFloat(input);
        if (isNaN(score), score >= 0 && score <= 100) {
            scores.push(score);
        }
    }

    if (scores.length === 0) {
        alert("No valid scores entered.");
        return{avg: 0, highest: null, lowest: null, count: 0};
    }

    const total = scores.reduce((sum, score) => sum + score, 0);
    const avg = (total / scores.length).toFixed(2);
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);

    console.log(`Average Score: ${avg}`);
    console.log(`Highest Score: ${highest}`);
    console.log(`Lowest Score: ${lowest}`);

    return {
        avg: parseFloat(avg),
        highest,
        lowest,
        count: scores.length
    };
}