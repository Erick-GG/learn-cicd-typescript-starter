import { describe, expect, test } from 'vitest';
const person = {
    isActive: true,
    age: 21
}

describe("person", () => {
    test("person is defined", () => {
        expect(person).not.toBeUndefined();
    });

    test("person is active", () => {
        expect(person.isActive).toBe(true);
    })
});
