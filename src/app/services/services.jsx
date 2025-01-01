
export const fetchUserDetails = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_PROTECTEDROUTE_API_ENDPOINT
  );
  return response.json();
};
