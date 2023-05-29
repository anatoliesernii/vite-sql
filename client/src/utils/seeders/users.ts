const users = [
  null,
  {
    id: 1,
    name: 'User1',
    permissions: ['view', 'create', 'edit'],
    roles: 'dev'
  },
  {
    id: 2,
    name: 'User2',
    permissions: ['view', 'create', 'edit'],
    roles: 'admin'
  },
  {
    id: 3,
    name: 'User3',
    permissions: ['view', 'create', 'edit'],
    roles: 'manager'
  },
  {
    id: 4,
    name: 'User4',
    permissions: ['view', 'create'],
    roles: 'manager'
  },
  {
    id: 5,
    name: 'User5',
    permissions: ['view'],
    roles: 'manager'
  },
  {
    id: 6,
    name: 'User6',
    permissions: ['create'],
    roles: 'employee'
  }
]

export default users;
