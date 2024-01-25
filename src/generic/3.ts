/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<P extends {}, S extends {}>(objA: P, objB: S): P & S {
  return Object.assign({}, objA, objB);
}

export {};
