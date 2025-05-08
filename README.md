

# Learn TypeScript Easily: Two Powerful Features

TypeScript adds types to JavaScript, helping developers catch bugs early. In this blog, we’ll look at two helpful concepts in TypeScript: the differences between `any`, `unknown`, and `never`, and how the `keyof` keyword works.

---


##  1. Difference Between `any`, `unknown`, and `never` in TypeScript

These three special types help define how data should behave in your code.
### `any`

- It disables type checking.
- Anything can be assigned to it, and it can be assigned to anything.
- It's useful when you're migrating JS code but should be avoided in large projects.

```ts
let value: any = "Hello";
value = 42; // No error
value.toUpperCase(); // No error, but can crash at runtime if value is not a string
```
### `unknown`
- Like any, but safer.
- You must check the type before using it.
```ts
let input: unknown = "World";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}

```

### `never`
- Used when a function never returns.

- For example, functions that throw errors.


```ts
function throwError(msg: string): never {
  throw new Error(msg);
}

```

## 2. What is the use of the `keyof` keyword in TypeScript?

- The `keyof` keyword is used to create a union of string literal types from the keys of an object or interface. This is powerful for creating generic and reusable code.

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User; // "name" | "age" | "email"

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  name: "Kawsar",
  age: 22,
  email: "kawsar@example.com"
};

const userName = getValue(user, "name"); // returns "Kawsar"

```



# Conclusion

Understanding special types like `any`, `unknown`, and `never` helps you write safer code. The `keyof` keyword makes your code more flexible and reusable.



### Thanks for reading!
Happy `coding` and keep exploring TypeScript!.




#### Useful Links:

- [Assignment 1 documentation](https://github.com/Apollo-Level2-Web-Dev/B5-Assignment-1)

- [task one](https://github.com/Apollo-Level2-Web-Dev/batch-4-be-a-typescript-technocrat/blob/main/practice_probelms.md)





