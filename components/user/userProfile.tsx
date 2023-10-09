import React, { useState, useEffect } from 'react';
import { currentUser } from '@clerk/nextjs';

interface UserProfileProps {
    onSubmit: (data: any) => void; 
}

const UserProfile: React.FC<UserProfileProps> = ({ onSubmit }) => {
    const initialState = {
        id: '', 
        username: '',
        name: '',
        email: '',
        profile_image: '',
        bio: '', 
        resume: '', 
        skills: [], 
        // ... and other required fields ...
    };

    const [userData, setUserData] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            const user = await currentUser();
            if (user) {
                setUserData(prevState => ({
                    ...prevState,
                    id: user.id,
                    username: user.username || '',
                    name: user.first_name + ' ' + user.last_name,
                    email: user.email_addresses[0]?.email_address || '',  
                    profile_image: user.profile_image_url,
                }));
            }
        };

        fetchData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(userData);
        }}>
            {/* Fields filled from Clerk data */}
            <input 
                name="username"
                value={userData.username}
                onChange={handleChange}
                placeholder="Username"
            />
            {/* ... Repeat similar input fields for other Clerk properties ... */}

            {/* User-input fields */}
            <textarea 
                name="bio"
                value={userData.bio}
                onChange={handleChange}
                placeholder="Bio"
            />
            <input 
                name="resume"
                value={userData.resume}
                onChange={handleChange}
                placeholder="Resume Link"
            />
            {/* ... Add input fields for other user-specific data ... */}

            <button type="submit">Submit</button>
        </form>
    );
};

export default function Page() {
    const handleUserDataSubmit = (data: any) => {
        // Handle the form submission, send data to backend or whatever is required
        console.log(data);
    };

    return (
        <div>
            <UserProfile onSubmit={handleUserDataSubmit} />
        </div>
    );
}
