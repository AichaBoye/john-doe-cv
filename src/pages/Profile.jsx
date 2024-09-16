// src/components/Profile.js

import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github-john-doe');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="profile">
      <h2>{profile.name}</h2>
      <img src={profile.avatar_url} alt={profile.name} />
      <p><strong>Bio:</strong> {profile.bio}</p>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Followers:</strong> {profile.followers}</p>
      <p><strong>Following:</strong> {profile.following}</p>
      <p><strong>Public Repos:</strong> {profile.public_repos}</p>
      <p><strong>GitHub URL:</strong> <a href={profile.html_url} target="_blank" rel="noopener noreferrer">{profile.html_url}</a></p>
    </div>
  );
};

export default Profile;
