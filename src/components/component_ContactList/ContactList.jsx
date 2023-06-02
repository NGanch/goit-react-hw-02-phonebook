import React from "react";
import css from "./ContactList.module.css";
export const  ContactList = ({contacts, onDeleteContact}) => {

    return (
        <ul className={css.list_contacts}>
            {contacts.map(({id, name, number}) => (
    <li key={id} className={css.item_contacts}>
        <p className={css.name_contacts}>{name}: 
        <span className={css.number_contacts}>{number}</span></p>
        <button type="submit" className={css.button_contacts} onClick={() => onDeleteContact(id)}>Delete</button>
    </li>

    ))}
          
        </ul>
    )

}



