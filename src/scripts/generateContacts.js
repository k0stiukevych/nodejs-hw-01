import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`${number} контактів успішно згенеровано та додано.`);
  } catch (error) {
    console.error('Помилка при генеруванні контактів:', error);
    throw error;
  }
};

generateContacts(10);
