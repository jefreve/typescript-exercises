// mapped types are generic, meaning that
// we can take an existing type and pass it into a mapped type

// mapped types are also built on top of the syntax for index signatures

//
// Index signatures

// they allow us to say that for any key in an object, its type must be a string,
// and its value must be a string too

type Currency = {
  [Key: string]: string;
};

const currency: Currency = {
  name: "United States dollar",
  code: "USD",
  symbol: "$",
};
