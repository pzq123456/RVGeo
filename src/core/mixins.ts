// This can live anywhere in your codebase:

/**
 * Apply mixins to a class
 * @param derivedCtor - The class to apply the mixins to
 * @param constructors - The mixins to apply
 */
export function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}