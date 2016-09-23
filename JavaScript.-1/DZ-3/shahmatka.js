var result = "\n";
for (var resh = 1; resh <= 8; resh++) {
  for (var space = 1; space <= 8; space++) {
    result += (resh % 2 == space % 2) ? "#" : " ";
  }
  result += "\n";
}
console.log(result);
