import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Контакти відсутні. Нічого не можна видалити.');
      return;
    }

    contacts.pop();
    await writeContacts(contacts);

    console.log('Останній контакт успішно видалено!');
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error);
    throw error;
  }
};

removeLastContact();
