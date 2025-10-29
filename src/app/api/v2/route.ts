export async function GET() {
  const users = [
    {
      id: "1",
      email: "test@test.com",
      fullName: "Test User",
      createdAt: new Date(),
      name: {
        first: "Test",
        last: "User",
      },
      status: "active",
      lastLoginAt: new Date(),
    },
    {
      id: "2",
      email: "test2@test.com",
      fullName: "Test User2",
      createdAt: new Date(),
      name: {
        first: "Test2",
        last: "User2",
      },
      status: "active",
      lastLoginAt: new Date(),
    },
  ];
  return Response.json(users);
}
