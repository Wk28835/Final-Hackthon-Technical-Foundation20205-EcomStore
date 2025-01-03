export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'password',
        title: 'Password', // For simplicity, store hashed passwords only
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address', // For simplicity, store hashed passwords only
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone', // For simplicity, store hashed passwords only
        type: 'text',
      },
      {
        name: 'city',
        title: 'City', // For simplicity, store hashed passwords only
        type: 'string',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        options: {
          default: () => new Date().toISOString(),
        },
      },
    ],
  };
  