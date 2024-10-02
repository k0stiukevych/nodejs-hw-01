import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const contacts = await readContacts();

        return `У вас - ${contacts.length} контактів :)`;
    } catch (error) {
        console.error('Помилка при підрахунку контактів:', error);
        throw error;
    }
};

console.log(await countContacts());
