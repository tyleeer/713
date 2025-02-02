waitAndPrint = (props = {}) => {
  const { message, repeatedMessage, interval } = props;
  console.log(`${message} ${repeatedMessage}`);
  let count = 1;
  setInterval(() => {
    count++;
    console.log(
      `${message} ${repeatedMessage.concat(count > 1 ? " " : "").repeat(count)}`
    );
  }, interval);
};

// Example usage:
waitAndPrint({ message: "Hello", repeatedMessage: "world!", interval: 3000 });
