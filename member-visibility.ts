// Visibility modifiers are: public, private and protected

// a protected field or method can be accessed only within the class methods but not directly
// and it can also be accessed by subclasses (classes that extend the class)
// so for example, if name is protected, it can be accessed by the describeLanguages method
// but not outside the class itself, therefore doing this wouldn't be possible:

// nigeria.name

// private instead makes a field or a method not accessible by subclasses
// and also it cannot be accessed outside the class, so this wouldn't be allowed:

// class Country {
//     private code: string = "";

//     //rest of content
// }

//this is outside of class
// nigeria.code  (not allowed)

class Country {
  protected name: string = "";
  code: string;
  languages: string[] = [];

  // we can either declare a field like we did with "code"
  // or we can use an initialiser, like we did with "name"
  // name = "";
  // what the initialiser does is that when an instance of
  // the Country class is created, it initialises its name
  //   field to an empty string

  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }

  public addLanguage(language: string) {
    this.languages.push(language);
  }

  describeLanguages(): string {
    return `The languages spoken in ${this.name} include: ${this.languages.join(
      ", "
    )}.`;
  }
}

const nigeria = new Country("Nigeria", "NG");

// nigeria.name = ""

nigeria.addLanguage("Hausa");
nigeria.addLanguage("Igbo");
nigeria.addLanguage("Yoruba");
nigeria.addLanguage("English");

// console.log(nigeria);
const description = nigeria.describeLanguages();

console.log(description);
