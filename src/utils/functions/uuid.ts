export const getUUID = () => {
    const uuid = crypto.randomUUID();
    return uuid;
}