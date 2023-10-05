// the record utility type creates an object type from the property and value types that we provided

// const country: Record<string, string | number> = {
//   name: "Spain",
//   code: "ES",
//   currency: "Euro",
//   population: 47_450_795,
// };

// the first parameter is the type for the strings on the left side, because we want the property names
// to be string
// and the second parameter specifies the values of all the properties in this object

interface Country {
  name: string;
  code: string;
  currency: string;
  population: number;
}

// const countries: Record<string, Country> = {
//   spain: {
//     name: "Spain",
//     code: "ES",
//     currency: "Euro",
//     population: 47_450_795,
//   },
//   nigeria: {
//     name: "Nigeria",
//     code: "NG",
//     currency: "Naira",
//     population: 211_400_708,
//   },
//   greece: {
//     name: "Greece",
//     code: "GR",
//     currency: "Euro",
//     population: 10_678_632,
//   },
// };

// to make it even more useful, we can restrict the property names
// at the moment any string is valid for the property name

// and we can specify which strings can be used for the property name, the one that contains
// the Country object
// so we can do like this: (and this way the fourth property name won't be valid)

// const countries: Record<"spain" | "nigeria" | "greece", Country> = {
//   spain: {
//     name: "Spain",
//     code: "ES",
//     currency: "Euro",
//     population: 47_450_795,
//   },
//   nigeria: {
//     name: "Nigeria",
//     code: "NG",
//     currency: "Naira",
//     population: 211_400_708,
//   },
//   greece: {
//     name: "Greece",
//     code: "GR",
//     currency: "Euro",
//     population: 10_678_632,
//   },
//   narnia: {
//     name: "",
//     code: "",
//     currency: "",
//     population: 0,
//   },
// };

// the object literal is not allowed to specify a property name narnia
// because it doesn't exist in the type that we specified
// in the angle brackets after the Record utility
// Record<"spain" | "nigeria" | "greece", Country>
// the property name must be spain, nigeria, or greece
// and the actual object values, must be Country objects

// and we can even define a new type alias
type Countries = Record<"spain" | "nigeria" | "greece", Country>;

// so now we have a type alias, which is using the Record utility type
// specifying that this object must only have properties with these names
// and that each object inside of this, on these properties, must match this
// Country object type

const countries: Countries = {
  spain: {
    name: "Spain",
    code: "ES",
    currency: "Euro",
    population: 47_450_795,
  },
  nigeria: {
    name: "Nigeria",
    code: "NG",
    currency: "Naira",
    population: 211_400_708,
  },
  greece: {
    name: "Greece",
    code: "GR",
    currency: "Euro",
    population: 10_678_632,
  },
  narnia: {
    name: "",
    code: "",
    currency: "",
    population: 0,
  },
};
