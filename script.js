const byteSize = (str) => {
  // write your code here
	const blob = new Blob([str]);

  // Get the size of the Blob in bytes
  const bytes = blob.size;

  return bytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
