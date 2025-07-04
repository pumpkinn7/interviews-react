import React from "react";
import { Container } from "react-bootstrap";

interface Profile {
    id: string;
    name: string;
    avatar: string;
    address: string;
    city: string;
    state: string;
    countryCode: string;
}

export default function ListProfile() {
    const [profiles, setProfiles] = React.useState<Profile[]>([]);
    
    React.useEffect(() => {
        fetch("https://65ffa099df565f1a614527ba.mockapi.io/api/v1/category")
        .then((response) => response.json())
        .then((data) => setProfiles(data))
        .catch((error) => console.error(error));
    }, []);
    
    return (
        <div className="list-profile d-flex flex-wrap justify-content-center">
        {profiles.map((profile) => (
            <Container key={profile.id} className="profile-card w-25 d-inline-block m-2"
            style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "8px" }}>

            <img src={profile.avatar} 
            style={{ width: "50px", height: "auto", borderRadius: "8px", float: "right", marginRight: "10px" }}
            />

            <h5>{profile.name}</h5>

            <p>{profile.address}, {profile.city}, {profile.state}, {profile.countryCode}</p>

            </Container>
        ))}
        </div>
    );
}