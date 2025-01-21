import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Admin {
  static async findByUsername(username) {
    try {
      const admin = await prisma.admin.findUnique({
        where: { username },
      });
      return admin;
    } catch (error) {
      throw new Error('Database error while fetching admin by username');
    }
  }

  static async findByUsernameAndPasskey(username, passkey) {
    try {
      const admin = await prisma.admin.findUnique({
        where: {
          username_passkey: {
            username: username,
            passkey: passkey
          },
        },
      });
      return admin;
    } catch (error) {
      throw new Error('Database error while fetching admin by username and passkey');
    }
  }

  static async updatePassword(username, newPassword) {
    try {
      const updatedAdmin = await prisma.admin.update({
        where: { username },
        data: { password: newPassword },
      });
      return updatedAdmin;
    } catch (error) {
      throw new Error('Database error while updating password');
    }
  }
}

export default Admin;
