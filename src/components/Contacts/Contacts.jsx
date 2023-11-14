import { useSelector, useDispatch } from 'react-redux';
//import { remove } from "redux/contactsSlice";
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Notification } from "components/Notification/Notification";
import { NotificationFilter } from "components/NotificationFilter/NotificationFilter";
import { deleteContactById } from 'redux/contactOperations';
import { selectContacts, selectFilter, selectLoading } from '../../redux/selectors';

export const Contacts = () => {

    const isLoading = useSelector(selectLoading);
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    //const contacts = useSelector(state => state.contacts);
    //const dispatch = useDispatch();
    //const filter = useSelector(state => state.filter);
    console.log(contacts);
    //console.log(filter);

    const filteredContacts = contacts.filter(contact => {
        return (
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.includes(filter)
        );
    });
  
    const onDeleteContact = contactId  => {
        dispatch(deleteContactById(contactId));
    };

    if (isLoading) {
        return <p>Loading data...</p>
    }

    return (
        <>
            {contacts.length === 0 ? (
            <Notification message="There are no contacts in your list, sorry" />
            ) : filteredContacts.length > 0 ? (
            <ContactsList
                filteredContacts={filteredContacts}
                onDeleteContact={onDeleteContact}
            />
            ) : (
            <NotificationFilter notification="No contacts found that match the filter" />
            )}
        </>
    );
};