const split = (value: string): string[] => {
  const ArraySplit: string[] = [];

  for (let i = 0; i < value.length; i++) {
    ArraySplit.push(value[i]);
  }

  return ArraySplit;
};

//résultat attendu : ["h","e","l","l","o"]

console.log(split("hello"));
