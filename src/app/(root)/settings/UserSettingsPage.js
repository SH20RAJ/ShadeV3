"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function UserSettingsPage() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    profileImage: "",
    username: "",
    fullName: "",
    email: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetch("/api/getsession").then((res) => res.json()).then((result) => {
        setUser(result.user);
        setFormData({
          profileImage: result.user?.avatar || "",
          username: result.user?.username || "",
          fullName: result.user?.name || "",
          email: result.user?.email || "",
        });
        return result.user;
      });
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/updateUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        fullName: formData.fullName,
        email: formData.email,
        profileImage: formData.profileImage,  // You might need to handle this separately if you are actually uploading images
      }),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      setUser(updatedUser);
      alert("Profile updated successfully!");
    } else {
      alert("Failed to update profile.");
    }
  };

  return (
    <main className="w-full max-w-3xl mx-auto py-12 px-4 md:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Account Settings</h1>
      </header>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="profileImage">Profile Image</Label>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="Profile Image" src={formData.profileImage || "/placeholder-avatar.jpg"} />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <Input id="profileImage" placeholder="Enter URL for your profile image" value={formData.profileImage} onChange={handleChange} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Enter your email address" type="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="flex justify-end">
          <Button className="ml-auto" type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </main>
  );
}
