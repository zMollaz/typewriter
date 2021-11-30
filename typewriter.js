const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char in sentence) {
  setTimeout(() => {
    if (Number(char) === sentence.length - 1) {
      process.stdout.write(sentence[char] + '\n');
    } else {
      process.stdout.write(sentence[char]);
    }
  }, delay);
  delay += 50;
}