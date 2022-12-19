import { Prisma } from '@prisma/client';
import { Context } from '../../index';

interface SignUpArgs {
  email: string;
  name: string;
  bio: string;
  password: string;
}

export const authResolvers = {
  signUp: (
    _: any,
    { email, name, bio, password }: SignUpArgs,
    { prisma }: Context,
  ) => {
    return prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    return;
  },

  signIn: () => {},
};
