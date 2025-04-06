export const selectorFactory = {
    getH1Text: (x: string) => `h1:contains('${x}')`,
    getH2Text: (x: string) => `h2:contains('${x}')`,
    getH3Text: (x: string) => `h3:contains('${x}')`,
    getAText: (x: string) => `a:contains('${x}')`,
    getButtonText: (x: string) => `button:contains('${x}')`
}