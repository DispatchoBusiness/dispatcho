import { useEffect, useState } from "react";
import { supabase } from '../index';

type Contact = {
    id: number;
    email: string;
    phone: string;
};

export default function useContactData() {
    const [contact, setContact] = useState<Contact | null>(null);

    useEffect(() => {
        getContact();
    }, []);

    async function getContact() {
        const { data } = await supabase.from("contact").select();
        if (data && data.length > 0) {
            console.log(data);
            setContact({ id: data[0].id, email: data[0].email, phone: data[0].phone });
        }

        await console.log('email', data[0].id);
    }
}