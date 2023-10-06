// we can think of classes as a template for creating an object

// class Country {
//     readonly name: string = "";
//     code: string;
//     languages: string[] = [];

//     // we can either declare a field like we did with "code"
//     // or we can use an initialiser, like we did with "name"
//     // name = "";
//     // what the initialiser does is that when an instance of
//     // the Country class is created, it initialises its name
//     //   field to an empty string

//     constructor(name: string, code: string) {
//       this.name = name;
//       this.code = code;
//     }

//     addLanguage(language: string) {
//       this.languages.push(language);
//     }

//     describeLanguages(): string {
//       return `The languages spoken in ${this.name} include: ${this.languages.join(
//         ", "
//       )}.`;
//     }
//   }

//   const nigeria = new Country("Nigeria", "NG");

// nigeria.name = ""

//   nigeria.addLanguage("Hausa");
//   nigeria.addLanguage("Igbo");
//   nigeria.addLanguage("Yoruba");
//   nigeria.addLanguage("English");

// console.log(nigeria);
//   const description = nigeria.describeLanguages();

//   console.log(description);
