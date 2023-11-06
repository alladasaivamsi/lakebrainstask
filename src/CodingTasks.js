// 1. A (144750)
// 2. D (Grand Daugther)
// 3. Logical Code Thinking
function printStars(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 2 * i - 1; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
    for (let i = n-1; i >= 1; i--){
        for (let j = 1; j <= 2 * i - 1; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}
printStars(5);