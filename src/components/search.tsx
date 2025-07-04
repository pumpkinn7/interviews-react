import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
interface Profile {
    id: string;
    name: string;
    avatar: string;
    address: string;
    city: string;
    state: string;
    countryCode: string;
}
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    fetch("https://65ffa099df565f1a614527ba.mockapi.io/api/v1/category")
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        setFilteredProfiles(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = () => {
    const results = profiles.filter(profile =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfiles(results);
  };

  return (
    <Container className="mt-5">
      <Form className="d-flex mb-3">
        <Form.Control
          style={{ width: "300px" }}
          type="text"
          placeholder="ค้นหาชื่อ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch} className="ms-2 btn btn-light" style={{ border: "1px solid #ccc" }}>
          ค้นหา
        </Button>
      </Form>
      <div className="list-profile d-flex flex-wrap justify-content-center">
        {filteredProfiles.map((profile) => (
          <Container key={profile.id} className="profile-card w-25 d-inline-block m-2"
            style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "8px" }}>
            <img src={profile.avatar}
              style={{ width: "50px", height: "auto", borderRadius: "8px", float: "right", marginRight: "10px" }}
              alt={profile.name}
            />
            <h5>{profile.name}</h5>
            <p>{profile.address}, {profile.city}, {profile.state}, {profile.countryCode}</p>
          </Container>
        ))}
      </div>
    </Container>
  );
}
