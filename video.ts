// combine existing object types with intersection types

interface Country {
  name: string;
}

interface Climate {
  desert: boolean;
}

function describe(country: Country & Climate) {
  console.log(`Country name is ${country.name}`);
  console.log(`Country has a desert climate: ${country.desert}`);
}

describe({ name: "Nigeria", desert: true });

// in alternativa si può fare
// type CountryWithClimate = Country & Climate ;

//
// Altro esempio

// interface Country {
//   name: string;
//   code: string;
// }

// interface CountryData {
//   languages: string[];
//   population: number;
// }

// type CountryWithData = Country & CountryData;

// const greece: CountryWithData = {
//   name: "Greece",
//   code: "GR",
//   languages: ["Greek"],
//   population: 10_678_632,
// };
