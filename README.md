
# The impactful blog post on the questions is given below:

  

## 1. What are some differences between interfaces and types in TypeScript?

**Answer:**   
**Interface** and **Type** are used to define the shape of an object but they have some differences in when and how they can be used. The differences are:

### Interface:

* Interface is used in typescript to define the structure of an object, such as properties and methods. It is good for defining contracts for object data shapes and class structures.

* Interface can be extended other interface using `extends` keyword.

*  **Example :**  
`interface Animal {
  name: string;
};` 
`interface Dog extends Animal {
  breed: string;
};`

* Interface cannot be used to define primitives types like string, number etc.
*  **Example :**  `interface Roll {
  value: string;
};`   

> *It's  example not allowed*
* Interface supports **declaration merging**. If the same interface is declared multiple times,  typescript will merge all interface properties into single interface.
*  **Example :** 
`interface Person {
  name: string;
  age: number;
};` 
`interface Person {
  gender: string;
};` 
`const person: Person = {
  name: "John",
  age: 30,
  gender: "Male"
};` 
> The two **Person** interfaces are merged, so the object can have all  properties.

* Interface not directly support unions and intersections.

* Interface is  more readable and easier to understand for object-based structures.

* Interface can define in function ,  but not common for function. Like `interface Add {
  (a: number, b: number): number;
};
const add: Add = (a, b) => a + b;` 

* Normally interface can be used with generics like `interface Boll<T> {
  value: T;
};
const box: Boll <number> = { value: 42 };`

* In some times, **interface** may perform better due to its optimization by TypeScript.

### Type:

* A **type** alias in TypeScript is more flexible. It can define the shape of an object, but also unions, intersections,  primitive types.

* **Type** can combine other type using `&` operator for intersections. 
*  **Example :**  
`type Animal {
  name: string;
};` 
`type Dog = Animal & {
  breed: string;
};`

* **Type** does not support declaration merging. If it declare the same **type** more than once, it will throw an error.

* **Type** can define both complex types and primitives like strings, numbers etc. Such as `type ID = string | number;`

* **Type** can represent more complex data structures like tuples, arrays etc. Like, `type Coordinates = [number, number];
const parameter: Coordinates = [10, 20];`

* More commonly used to define function types. **Example:** 
`type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;`

* **Type** can use the `extends` keyword only inside generics with conditional type. Such as `type IsString<T> = T extends string ? "Yes" : "No";`

* **Type**  can be more complex, especially when using **unions** or **intersections**, making it slightly less readable for beginners.

* This can lead  more complex inference scenarios that may affect performance in some edge cases.

#### Here the differences between *type* and *interface* in TypeScript.
<br/>


## 2. What is the use of the `keyof` keyword in TypeScript? Provide an example.
**Answer:** 

The **`keyof`**  keyword in TypeScript is used to get the keys of an object type. It creates a **union type** of the **string literals** of the keys of the given type.

**The syntax of keyword is `keyof T` .**

> Where  T is a type or interface, and `keyof T` will return a **union**
> of all the keys in T.

<br/>


`keyof` Keyword used in many ways in TypeScript . They are:

<br/> 

*  **Using `keyof` to get object keys**. **Example:**  `type Person = {
  name: string;
  age: number;
};` `type PersonKeys = keyof Person;` 

> If an object **Person** . The **`keyof Person`**    would create a union of the keys of **Person** , which are **name** and **age** . that means **PersonKeys = 'name' | age**.
> 

<br/>
<br/>

*  **Using `keyof` with a generic function.** The `keyof` keyword is used with generics to ensure type safety when accessing properties of objects.
**Example:**  `type Person = {
  name: string;
  age: number;
};`  
`function getPersonValue<T, K extends keyof T>(pro: T, key: K): T[K] {
  return pro[key];
}`

> Here T is the object type Person.  **K extends keyof  T**  ensures that key of T is a valid key of the **T type object**.  **T[k]** meaning the type of the value is to the key **K from the object T**.  In this function ****only valid key** of the `Person` object are allowed and ensure that invalid key not passing the function. 

<br/>
<br/>

* **Using `keyof` with Object Keys**. It is used to access keys dynamically. **Example:** `const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};`  `function getCar<K extends keyof typeof car>(key: K): string {
  return car[key];
};`

> Here **car** is a actual object . when declare `typeof car`, its gets the **type actual of object** `car`.  `keyof typeof car` creates a union of  car  keys like, `"make" | "year"`. `K expends` means its  passes only car objects key, not another invalid key. 

<br/>


*Finally,* we can tell `keyof` keyword use for ensures **type safety** when accessing object properties dynamically, helps create **generic utilities** that work with object keys, **prevents invalid property** access at compile time, helps build reusable components and works great with form inputs, object mappers, validators, etc.