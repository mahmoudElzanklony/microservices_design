
export default async function (table) {

    const storeModule = await import(`../store/${table}.ts`);
    return  storeModule[(table[0].toUpperCase() + table.slice(1)) + 'Store']()
}