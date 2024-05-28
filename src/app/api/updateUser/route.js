// /pages/api/updateUser.js

import updateUser from "./updateUser";

export const POST = async (req, res) => {
      const data = await req.json();


      return Response.json(await updateUser(data));


      // Validate and sanitize input data here
  
      // Update user in the database
      // Assume we have a function `updateUser` to update the user data in your database
    //   try {
    //     const updatedUser = await updateUser(req.session.user.id, { username, fullName, email, profileImage });
    //     return Response.json(updatedUser);
    //   } catch (error) {
    //     res.status(500).json({ error: 'Failed to update user' });
    //   }

  };
  